
import Command from '../Command'
import Commandable from '../Commandable'
import Replayer from '../Replay/Replayer'
import Loader from './Loader'
import Saver from './Saver'
import IOFactory from './IOFactory'
import IIOFactory from './IIOFactory'
import Observer from '../../Observe/Observer'

export default class CommandStore implements Loader, Saver, Observer<Command> {

  private readonly commands : Command[] = []
  private replayer : Replayer | undefined = undefined

  public add (command : Command | Command []) {
    if (command instanceof Array){
      this.commands.push(...command)
    } else {
      this.commands.push(command)
    }
  }

  public setReplayer (replayer : Replayer) {
    this.replayer = replayer
  }

  public replay (commandable : Commandable) {
    if (this.replayer !== undefined) {
      this.replayer!.replay(commandable, this.commands)
    }
  }

  public async load (name : string) : Promise<Command[]> {
    const ioFactory : IIOFactory = new IOFactory()
    const loader = ioFactory.createLoader()
    return await loader.load(name)
  }

  public save (name : string) {
    const ioFactory : IIOFactory = new IOFactory()
    const saver = ioFactory.createSaver()
    saver.save(name, this.commands)
  }

  public notify (command : Command) {
    this.add(command)
  }

}