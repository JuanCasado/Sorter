
import DecoratorBase from './DecoratorBase'
import Delayable from './Delayable'

export default class DelayedSwitch extends DecoratorBase {

  public async switch (position1 : number, position2 : number) {
    await super.getElementHolder()!.switch(position1, position2)
    await Delayable.sleep()
  }

}
