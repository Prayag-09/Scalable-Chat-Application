Scalable Realtime Chat Application

Issue with Sockets : 
	If more number of people are connected to the same server we are not able to scale the app.
	Therefore a new server is spun up to run but this causes issue that server 1 and server 2 is not connected !! 
	So they can't communicate with each other.
		
How we fix it?
	We use Redis to fix this scalability issue by connecting those severs with Redis DB.
	

We use Pub/Sub Model to fix this issue
		
