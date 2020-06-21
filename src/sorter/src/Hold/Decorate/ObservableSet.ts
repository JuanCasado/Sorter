
import DecoratorBase from './DecoratorBase'
import CommandSet from '../../Command/CommandSet'

export default class ObservableSet extends DecoratorBase {
  
  public async setAt (position : number, value : number) {
    this.getElementHolder()!.alert(new CommandSet({to : position, value: value}))
    await this.getElementHolder()!.setAt(position, value)
  }

}
