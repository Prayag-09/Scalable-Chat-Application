'use client';

import React, { useCallback, useEffect, useRef, useContext } from 'react';
import { io, Socket } from 'socket.io-client';

interface SocketProviderProps {
	children?: React.ReactNode;
}

interface IoSocketContext {
	sendMessage: (msg: string) => void;
}

const SocketContext = React.createContext<IoSocketContext | null>(null);

export const useSocket = () => {
	const state = useContext(SocketContext);
	if (!state) {
		throw new Error(
			'Socket context is undefined. Please ensure you are using this within a SocketProvider.'
		);
	}
	return state;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
	const socketRef = useRef<Socket | null>(null);
	
	const sendMessage: IoSocketContext['sendMessage'] = useCallback((msg) => {
		if (socketRef.current && socketRef.current.connected) {
			socketRef.current.emit('message', msg);
			console.log('Message sent:', msg);
		} else {
			console.error('Socket is not connected. Unable to send message.');
		}
	}, []);

	useEffect(() => {
		socketRef.current = io('http://localhost:8000');

		socketRef.current.on('connect', () => {
			console.log('Connected to server with ID:', socketRef.current?.id);
		});

		socketRef.current.on('connect_error', (err) => {
			console.error('Connection error:', err.message);
		});

		return () => {
			socketRef.current?.disconnect();
			console.log('Disconnected from server');
		};
	}, []);

	return (
		<SocketContext.Provider value={{ sendMessage }}>
			{children}
		</SocketContext.Provider>
	);
};
