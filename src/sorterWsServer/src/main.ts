

import WebSocket from 'ws'
import SingleVisitor from '../../sorter/src/Simulate/Visit/SingleVisitor'
import Simulation from '../../sorter/src/Simulate/Simulation'
import WSExecutor from './WSExecutor'
import WSObserver from './WSObserver'
 
const WebSocketServer = new WebSocket.Server({ port: 8080 });
 
WebSocketServer.on('connection', (Socket) => {
  Socket.on('message', async (simulation : string) => {
    const wsObserver = new WSObserver(Socket)
    const visitor = new SingleVisitor()
    const executor = new WSExecutor(wsObserver)
    visitor.simulate(JSON.parse(simulation) as Simulation, executor)
  })
})

WebSocketServer.on('listening', ()=>{console.log('Ready!')})