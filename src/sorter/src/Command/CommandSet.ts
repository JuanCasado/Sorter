
import BaseCommand from './BaseCommand'
import CommandType from './CommandType'

interface CommandSetContent {
  to : number
  value : number
  time? : number
}

export default class CommandSet extends BaseCommand {

  public readonly to : number;
  public readonly value : number;

  constructor (command : CommandSetContent) {
    super(CommandType.SET, command.time)
    this.to = command.to
    this.value = command.value
  }

}