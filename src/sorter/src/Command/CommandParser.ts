
import Command from './Command'
import CommandType from './CommandType'
import CommandFactory from './CommandFactory'

export default class CommandParser {

  private commandFactory = new CommandFactory()

  public parse (file : string) : Command[] {
    const commands : Command[] = []
    const rawCommands = JSON.parse(file).commands
    if (rawCommands === undefined)
      return commands
    for (let command of rawCommands) {
      let newCommand = this.getCommand(command)
      if (newCommand !== undefined) {
        commands.push(newCommand)
      }
    }
    return commands
  }

  public getCommand (command : any) : Command | undefined {
    const commandType = command.type
    let newCommand : Command | undefined = undefined
    switch (commandType) {
      case CommandType.GET.toString() : newCommand = this.commandFactory.createCommand(CommandType.GET, command); break
      case CommandType.SET.toString() : newCommand = this.commandFactory.createCommand(CommandType.SET, command); break
      case CommandType.SWITCH.toString() : newCommand = this.commandFactory.createCommand(CommandType.SWITCH, command); break
    }
    return newCommand
  }

}