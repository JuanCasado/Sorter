
import SortFactoryType from './SortFactoryType'
import SortFactory from './SortFactory'

export default interface ISortAbstractFactory {

  createSortFactory (factory : SortFactoryType) : SortFactory 

}