
import Comparable from './Comparable'
import Comparison from './Comparison'
import ComparatorType from './ComparatorType'

export default interface Comparator {
  compare(comparable1 : Comparable, comparable2 : Comparable) : Comparison
  type() : ComparatorType
}