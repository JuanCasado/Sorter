
import CommandStore from './CommandStore'

export default interface ICommandStoreFactory {

  createCommandStore () : CommandStore

}