
import DecoratorBase from './DecoratorBase'
import Delayable from './Delayable'

export default class DelayedSet extends DecoratorBase {

  public async setAt (position : number, value : number) {
    await this.getElementHolder()!.setAt(position, value)
    await Delayable.sleep()
  }

}
