
import Command from './Command'
import CommandType from './CommandType'

export default interface ICommandFactory {

  createCommand (command : CommandType, init : any) : Command 

}