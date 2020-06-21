
import Command from './Command'

export default interface Commandable {
  readCommand (command : Command) : Promise<void>
}