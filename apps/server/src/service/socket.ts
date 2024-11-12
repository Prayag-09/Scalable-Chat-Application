import { Server, Socket } from 'socket.io';

export default class SocketUsage {
	private _io: Server;

	constructor() {
		console.log('Socket Init');
		this._io = new Server({
			cors: {
				allowedHeaders: ['*'],
				origin: '*',
			},
		});

		this._io.on('error', (err) => {
			console.error('Socket server error:', err);
		});
	}

	public eventListeners() {
		console.log('Init Socket Listeners...');
		this._io.on('connection', (socket: Socket) => {
			console.log('New Connection', socket.id);

			socket.on('error', (err) => {
				console.error(`Error on socket ${socket.id}:`, err);
			});

			socket.on('disconnect', (reason) => {
				console.log(`Socket ${socket.id} disconnected:`, reason);
			});

			socket.on('event:message', async ({ message }: { message: string }) => {
				try {
					console.log('New message', message);
					this._io.emit('event:message', { message, from: socket.id });
					
				} catch (error) {
					console.error('Error handling event:message', error);
					socket.emit('error:message', { error: 'Failed to process message' });
				}
			});
		});
	}

	get io() {
		return this._io;
	}
}
