
import Command from '../Command'
import Commandable from '../Commandable'

export default interface Replayer {
  replay (commandable : Commandable, commands : Command[]) : Promise<void>
}