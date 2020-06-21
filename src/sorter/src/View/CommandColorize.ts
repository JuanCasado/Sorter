
import CommandType from '../Command/CommandType'
import Command from '../Command/Command'
import CommandGet from '../Command/CommandGet'
import CommandSet from '../Command/CommandSet'
import CommandSwitch from '../Command/CommandSwitch'

export default class CommandColorize {

  private lastCommand? : Command 
  private same = 0
  private maxSame = 20

  public colorCommand (currentCommand? : Command) {
    if (this.lastCommand === currentCommand) {
      ++ this.same
    }else{
      this.same = 0
    }
    if (currentCommand !== undefined && (this.lastCommand === undefined || this.same <= this.maxSame)) {
      let extraColor : number[] = []
      let color = 'white'
      let colorize = currentCommand !== undefined
      if (colorize) {
        switch (currentCommand!.getType()){
          case CommandType.GET.toString():{
            const command = currentCommand as CommandGet
            extraColor.push(command.from)
            color = 'blue'
          }break;
          case CommandType.SET.toString():{
            const command = currentCommand as CommandSet
            extraColor.push(command.to)
            color = 'green'
          }break;
          case CommandType.SWITCH.toString():{
            const command = currentCommand as CommandSwitch
            extraColor.push(command.from)
            extraColor.push(command.to)
            color = 'red'
          }break;
        }
      }
      this.lastCommand = currentCommand
      return {colorize, extraColor, color}
    }else{
      return {colorize:false, extraColor:[], color:''}
    }
  }
}