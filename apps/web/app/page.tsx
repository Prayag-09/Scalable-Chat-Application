'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useSocket } from './context/SocketProvider';

export default function Page() {

  const { sendMessage } = useSocket();
  const [ message,setMessage ] = useState("");

	return (
		<div className='text-white bg-gray-800 min-h-screen w-screen flex flex-col items-center justify-center'>
			<h1 className='mb-4 font-semibold text-2xl'>Messages here</h1>
			<div className='flex w-full max-w-sm items-center space-x-2'>
				<Input type='text' placeholder='message' onChange={e => setMessage(e.target.value)}/>
				<Button type='submit' onClick={e => sendMessage(message)}>Send</Button>
			</div>
		</div>
	);
}
