
import Command from '../Command/Command'
import CommandType from '../Command/CommandType'
import CommandGet from '../Command/CommandGet'
import CommandSet from '../Command/CommandSet'
import CommandSwitch from '../Command/CommandSwitch'
import Commandable from '../Command/Commandable'
import ElementHolder from './ElementHolder'
import Observer from '../Observe/Observer'

export default class ComandBridge implements Commandable, ElementHolder {

  private readonly elementHolder : ElementHolder
  constructor (elementHolder : ElementHolder) {
    this.elementHolder = elementHolder
  }

  public getAt (position : number) : number {
    return this.elementHolder!.getAt(position)
  }

  public async setAt (position : number, value : number) {
    await this.elementHolder!.setAt(position, value)
  }

  public size () : number{
    return this.elementHolder!.size()
  }

  public forEach (callback: (value : number, index : number) => void) {
    this.elementHolder!.forEach(callback)
  }

  public async switch (position1 : number, position2 : number) {
    await this.elementHolder!.switch(position1, position2)
  }

  public async get (position : number) {
    return await this.elementHolder!.get(position)
  }

  public subscribe (observer : Observer<Command>) {
    this.elementHolder!.subscribe(observer)
  }

  public unsubscribe (observer : Observer<Command>) {
    this.elementHolder!.unsubscribe(observer)
  }

  public alert (event : Command) {
    this.elementHolder!.alert(event)
  }

  public async readCommand (command : Command) {
    switch (command.getType()) {
      case CommandType.GET: await this.readGetCommand(command as CommandGet); break
      case CommandType.SET: await this.readSetCommand(command as CommandSet); break
      case CommandType.SWITCH: await this.readSwitchCommand(command as CommandSwitch); break
    }
  }

  private async readGetCommand (command : CommandGet) {
    return await this.get(command.from)
  }

  private async readSetCommand (command : CommandSet) {
    await this.setAt(command.to, command.value)
  }

  private async readSwitchCommand (command : CommandSwitch) {
    await this.switch(command.from, command.to)
  }

}