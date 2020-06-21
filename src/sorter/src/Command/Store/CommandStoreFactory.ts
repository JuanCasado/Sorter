
import CommandStore from './CommandStore'
import ICommandStoreFactory from './ICommandStoreFactory'

export default class CommandStoreFactory implements ICommandStoreFactory{

  public createCommandStore () : CommandStore {
    return new CommandStore()
  }

}