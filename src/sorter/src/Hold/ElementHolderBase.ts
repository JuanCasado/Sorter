
import Element from '../Compare/Element'
import ElementHolder from './ElementHolder'
import Comparable from '../Compare/Comparable'
import ObservableBase from '../Observe/ObservableBase'
import Command from '../Command/Command'

export default class ElementHolderBase extends ObservableBase<Command> implements ElementHolder {

  private readonly data : Comparable[] = []
  private readonly length : number

  constructor (size : number) {
    super()
    this.length = size
    this.data.length = this.length
  }

  public getAt (position : number) : number {
    try {
      return this.data[position].getValue()
    } catch {
      return 0
    }
  }

  public async setAt (position : number, value : number) {
    this.data[position] = new Element(value)
  }

  public size () {
    return this.length
  }

  public forEach (callback: (value : number, index : number) => void) {
    for (let i = 0; i < this.size(); ++i) {
      callback(this.getAt(i), i)
    }
  }

  public get (position : number) : Promise<Comparable> {
    return new Promise<Comparable>((resolve)=>resolve(this.data[position]))
  }

  public switch (position1 : number, position2 : number) : Promise<void> {
    const at1 = this.getAt(position1)
    const at2 = this.getAt(position2)
    this.setAt(position1, at2)
    this.setAt(position2, at1)
    return new Promise<void>((resolve)=>resolve())
  }

}