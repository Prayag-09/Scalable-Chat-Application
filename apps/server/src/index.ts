import http from 'http';
import socketUsage from './service/socket';

async function bootup(){
    const service = new socketUsage();
    const newServer = http.createServer();
    const PORT = process.env.PORT || 8000;
    
    service.io.attach(newServer);
    newServer.listen(PORT, ()=> {
        console.log(`HTTP Server is up and running on ${PORT}`);
    })
    service.eventListeners();
}
bootup();