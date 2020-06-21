
import ElementHolder from '../ElementHolder'

export default interface ElementHolderDecorator {
  decorate (elementHolder : ElementHolder) : ElementHolder
}