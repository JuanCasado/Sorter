
import Command from '../Command'

export default interface Saver {
  save (name : string, file : Command[]) : void
}