
import ElementHolder from './ElementHolder'
import ElementHolderType from './ElementHolderType'
import ElementHolderDecoratorType from './Decorate/ElementHolderDecoratorType'
import CommandBridge from './CommandBridge'

export default interface IElementHolderFactory {

  createElementHolder (elementHolder : ElementHolderType, size : number) : ElementHolder 
  decorate (elementHolder : ElementHolder, decorators : ElementHolderDecoratorType []) : ElementHolder 
  makeCommandable (elementHolder : ElementHolder) : CommandBridge 

}