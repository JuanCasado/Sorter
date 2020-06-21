
import Observer from '../../sorter/src/Observe/Observer'
import Command from '../../sorter/src/Command/Command'

export default class RestObserver implements Observer<Command> {

  private msgs : Command[] = []
  private lastGot = 0
  private toResolve = undefined
  private hasEnded = false

  public notify (command : Command) : void {
    this.msgs.push(command)
    if (this.toResolve !== undefined) {
      this.toResolve(this._getLast())
      this.toResolve = undefined
    }
  }

  public async getLast () : Promise<Command> {
    return new Promise<Command>((resolve)=> {
      if (this.hasEnded && this.lastGot === this.msgs.length) resolve()
      if (this.lastGot < this.msgs.length) {
        resolve(this._getLast())
      } else {
        this.toResolve = resolve
      }
    })
  }

  public end () {
    this.hasEnded = true
  }

  private _getLast () {
    const lastMsg = this.msgs[this.lastGot]
    ++this.lastGot
    return lastMsg
  }

}