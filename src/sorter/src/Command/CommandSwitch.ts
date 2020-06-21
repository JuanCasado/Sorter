
import BaseCommand from './BaseCommand'
import CommandType from './CommandType'

interface CommandSwitchContent {
  from : number
  to: number
  time? : number
}

export default class CommandSwitch extends BaseCommand {

  public readonly from : number;
  public readonly to : number;

  constructor (command : CommandSwitchContent) {
    super (CommandType.SWITCH, command.time)
    this.from = command.from
    this.to = command.to
  }

}