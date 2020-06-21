
import DecoratorBase from './DecoratorBase'
import CommandSwitch from '../../Command/CommandSwitch'

export default class ObservableSwitch extends DecoratorBase {

  public async switch (position1 : number, position2 : number) {
    this.getElementHolder()!.alert(new CommandSwitch({from : position1, to: position2}))
    await super.getElementHolder()!.switch(position1, position2)
  }

}
