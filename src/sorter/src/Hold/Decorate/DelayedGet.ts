
import DecoratorBase from './DecoratorBase'
import Delayable from './Delayable'

export default class DelayedGet extends DecoratorBase {

  public async get (position : number) {
    const comparable = await super.getElementHolder()!.get(position)
    await Delayable.sleep()
    return comparable
  }

}
