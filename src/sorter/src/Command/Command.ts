
import CommandType from './CommandType'

export default interface Command {
  getType () : CommandType
  getTime () : number
}