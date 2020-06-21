


import Replayer from './Replayer'
import Command from '../Command'
import Commandable from '../Commandable'
import Delayable from '../../Hold/Decorate/Delayable'

export default class InstanteReplayer implements Replayer {

  public async replay (commandable : Commandable, commands : Command[]) {
    const oldDelay = Delayable.getDelay()
    if (commands.length > 0) {
      const initCurrent = Date.now()
      const initCommand = commands[0].getTime()
      for (let command of commands) {
        await commandable.readCommand(command)
        const expectedTime = command.getTime() - initCommand
        const currentTime = Date.now() - initCurrent
        const delay = expectedTime - currentTime
        if (delay > 0) {
          Delayable.setDelay(delay)
          await Delayable.sleep()
        }
      }
    }
    Delayable.setDelay(oldDelay)
  }

}
