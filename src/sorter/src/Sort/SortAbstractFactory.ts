
import ISortAbstractFactory from './ISortAbstractFactory'
import SortFactoryType from './SortFactoryType'
import SortFactory from './SortFactory'
import SortFactoryLocal from './SortFactoryLocal'
import SortFactoryREST from './SortFactoryREST'
import SortFactoryWS from './SortFactoryWS'

export default class SortAbstractFactory implements ISortAbstractFactory {

  public createSortFactory (factory : SortFactoryType) : SortFactory {
    switch (factory) {
      case SortFactoryType.LOCAL : return new SortFactoryLocal()
      case SortFactoryType.REST : return new SortFactoryREST()
      case SortFactoryType.WS : return new SortFactoryWS()
    }
  }

}