
import Sortable from '../Sortable'
import Comparator from '../../Compare/Comparator'

export default interface Sorter {
  sort(sortable : Sortable, comparator : Comparator) : Promise<Sortable>
}