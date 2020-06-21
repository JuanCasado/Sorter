
import SorterType from './SortType'
import Sorter from './Sorters/Sorter'

export default interface SortFactory {
  createSorter(sorter : SorterType) : Sorter
}