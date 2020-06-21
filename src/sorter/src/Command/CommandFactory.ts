
import Command from './Command'
import CommandType from './CommandType'
import CommandGet from './CommandGet'
import CommandSet from './CommandSet'
import CommandSwitch from './CommandSwitch'
import ICommandFactory from './ICommandFactory'

export default class CommandFactory implements ICommandFactory {

  public createCommand (command : CommandType, init : any) : Command {
    switch (command) {
      case CommandType.GET: return new CommandGet(init)
      case CommandType.SET: return new CommandSet(init)
      case CommandType.SWITCH: return new CommandSwitch(init)
    }
  }

}