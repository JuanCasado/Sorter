
import Command from '../Command'

export default interface Saver {
  load (name : string) : Promise<Command[]>
}
