
import Comparator from './Comparator'
import ComparatorType from './ComparatorType'
import IComparatorFactory from './IComparatorFactory'
import Maximum from './Maximum'
import Minimum from './Minimum'

export default class ComparatorFactory implements IComparatorFactory {

  public createComparator (comparator : ComparatorType) : Comparator {
    switch (comparator) {
      case ComparatorType.MAX: return new Maximum()
      case ComparatorType.MIN: return new Minimum()
    }
  }

  public switchComparator (comparator : Comparator) : Comparator {
    switch (comparator.type()) {
      case ComparatorType.MAX: return new Minimum()
      case ComparatorType.MIN: return new Maximum()
    }
  }

}
