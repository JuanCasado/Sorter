
import Replayer from './Replayer'
import Command from '../Command'
import Commandable from '../Commandable'

export default class InstanteReplayer implements Replayer {

  public async replay (commandable : Commandable, commands : Command[]) {
    for (let command of commands) {
      await commandable.readCommand(command)
    }
  }

}
