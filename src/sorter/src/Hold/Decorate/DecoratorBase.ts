

import ElementHolderDecorator from './ElementHolderDecorator'
import ElementHolder from '../ElementHolder'
import Observer from '../../Observe/Observer'
import Command from '../../Command/Command'

export default class DecoratorBase implements ElementHolderDecorator {
  
  private elementHolder : ElementHolder | undefined = undefined

  protected getElementHolder () {
    return this.elementHolder
  }

  public decorate (elementHolder : ElementHolder) : ElementHolder {
    this.elementHolder = elementHolder
    return this
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

}
