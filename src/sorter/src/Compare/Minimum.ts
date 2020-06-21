
import Comparator from './Comparator'
import Comparison from './Comparison'
import Comparable from './Comparable'
import ComparatorType from './ComparatorType'

export default class Maximum implements Comparator {
  
  public compare (comparable1 : Comparable, comparable2 : Comparable) {
    if (comparable1.getValue() > comparable2.getValue()) {
      return Comparison.RIGHT
    } else if (comparable1.getValue() < comparable2.getValue()) {
      return Comparison.LEFT
    } else {
      return Comparison.SAME
    }
  }

  public type () {
    return ComparatorType.MAX
  }

}