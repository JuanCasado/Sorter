
import BaseCommand from './BaseCommand'
import CommandType from './CommandType'

interface CommandGetContent {
  from : number
  time? : number
}

export default class CommandGet extends BaseCommand {

  public readonly from : number

  constructor (command : CommandGetContent) {
    super(CommandType.GET, command.time)
    this.from = command.from
  }

}