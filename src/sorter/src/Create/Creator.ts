
import Creatable from './Creatable'
import ComparatorType from '../Compare/ComparatorType'

export default interface Creator {
  create(creatable : Creatable, comparator : ComparatorType) : Promise<void>
}