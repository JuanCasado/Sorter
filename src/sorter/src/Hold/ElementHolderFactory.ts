
import ElementHolder from './ElementHolder'
import ElementHolderType from './ElementHolderType'
import ElementHolderBase from './ElementHolderBase'

import ElementHolderDecorator from './Decorate/ElementHolderDecorator'
import ElementHolderDecoratorType from './Decorate/ElementHolderDecoratorType'
import DelayedGet from './Decorate/DelayedGet'
import DelayedSet from './Decorate/DelayedSet'
import DelayedSwitch from './Decorate/DelayedSwitch'
import ObservableGet from './Decorate/ObservableGet'
import ObservableSet from './Decorate/ObservableSet'
import ObservableSwitch from './Decorate/ObservableSwitch'

import CommandBridge from './CommandBridge'

export default class ElementHolderFactory {

  private readonly delayDecorators = [ElementHolderDecoratorType.DELAYED_GET, ElementHolderDecoratorType.DELAYED_SET, ElementHolderDecoratorType.DELAYED_SWITCH]
  private readonly observableDecorators = [ElementHolderDecoratorType.OBSERVABLE_GET, ElementHolderDecoratorType.OBSERVABLE_SET, ElementHolderDecoratorType.OBSERVABLE_SWITCH]

  public createElementHolder (elementHolder : ElementHolderType, size : number) : ElementHolder {
    switch (elementHolder) {
      case ElementHolderType.BASIC:              return new ElementHolderBase (size)
      case ElementHolderType.DELAYED:            return this.decorate(this.createElementHolder(ElementHolderType.BASIC,  size), this.delayDecorators)
      case ElementHolderType.OBSERVABLE:         return this.decorate(this.createElementHolder(ElementHolderType.BASIC,  size), this.observableDecorators)
      case ElementHolderType.DELAYED_OBSERVABLE: return this.decorate(this.createElementHolder(ElementHolderType.OBSERVABLE, size), this.delayDecorators)
    }
  }

  private createElementHolderDecorator (elementHolder : ElementHolderDecoratorType) : ElementHolderDecorator {
    switch (elementHolder) {
      case ElementHolderDecoratorType.DELAYED_GET:       return new DelayedGet()
      case ElementHolderDecoratorType.DELAYED_SET:       return new DelayedSet()
      case ElementHolderDecoratorType.DELAYED_SWITCH:    return new DelayedSwitch()
      case ElementHolderDecoratorType.OBSERVABLE_GET:    return new ObservableGet()
      case ElementHolderDecoratorType.OBSERVABLE_SET:    return new ObservableSet()
      case ElementHolderDecoratorType.OBSERVABLE_SWITCH: return new ObservableSwitch()
    }
  }

  public decorate (elementHolder : ElementHolder, decorators : ElementHolderDecoratorType []) : ElementHolder {
    let decoratedElementHolder : ElementHolder = elementHolder
    for (let decorator of decorators) {
      decoratedElementHolder = this.createElementHolderDecorator(decorator).decorate(decoratedElementHolder)
    }
    return decoratedElementHolder
  }

  public makeCommandable (elementHolder : ElementHolder) : CommandBridge {
    return new CommandBridge(elementHolder)
  }

}