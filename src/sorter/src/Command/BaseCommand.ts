
import Command from './Command'
import CommandType from './CommandType'

export default abstract class BaseCommand implements Command {

  public readonly time : number
  public readonly type : CommandType

  constructor (type : CommandType, time : number | undefined) {
    if (time) {
      this.time = time
    } else {
      this.time = Date.now()
    }
    this.type = type
  }

  public getTime () : number {
    return this.time
  }

  public getType () {
    return this.type
  }

}