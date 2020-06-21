
import Comparator from './Comparator'
import ComparatorType from './ComparatorType'

export default interface IComparatorFactory {

  createComparator (comparator : ComparatorType) : Comparator

}
