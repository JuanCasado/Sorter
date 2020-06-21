
import DecoratorBase from './DecoratorBase'
import CommandGet from '../../Command/CommandGet'

export default class ObservableGet extends DecoratorBase {

  public async get (position : number) {
    this.getElementHolder()!.alert(new CommandGet({from : position}))
    const comparable = await super.getElementHolder()!.get(position)
    return comparable
  }

}
