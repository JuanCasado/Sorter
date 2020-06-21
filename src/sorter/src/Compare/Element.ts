
import Comparable from './Comparable'

export default class Element implements Comparable {
  
  private readonly value : number

  constructor (value : number) {
    this.value = value
  }

  public getValue () : number {
    return this.value
  }

}