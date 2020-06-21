
import Observer from '../../sorter/src/Observe/Observer'
import Command from '../../sorter/src/Command/Command'
import WebSocket from 'ws'

export default class WSObserver implements Observer<Command> {

  private socket : WebSocket

  constructor (socket : WebSocket) {
    this.socket = socket
  }

  public notify (command : Command) : void {
    this.socket.send(JSON.stringify(command))
  }

  public end () {
    this.socket.close()
  }

}