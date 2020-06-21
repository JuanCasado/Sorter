
import SortFactory from './SortFactory'
import SorterType from './SortType'
import Sorter from './Sorters/Sorter'
import BubbleSorter from './Sorters/BubbleSorter'
import CocktailSorter from './Sorters/CocktailSorter'
import GnomeSorter from './Sorters/GnomeSorter'
import HeapSorter from './Sorters/HeapSorter'
import InsertSorter from './Sorters/InsertionSorter'
import MergeSorter from './Sorters/MergeSorter'
import QuickSorter from './Sorters/QuickSorter'
import SelectionSorter from './Sorters/SelectionSorter'
import ShellSorter from './Sorters/ShellSorter'
import TimSorter from './Sorters/TimSorter'

export default class SortFactoryREST implements SortFactory {
  
  createSorter(sorter : SorterType) : Sorter {
    switch (sorter) {
      case SorterType.BUBBLE: return new BubbleSorter()
      case SorterType.COCKTAIL: return new CocktailSorter()
      case SorterType.GNOME: return new GnomeSorter()
      case SorterType.HEAP: return new HeapSorter()
      case SorterType.INSERT: return new InsertSorter()
      case SorterType.MERGE: return new MergeSorter()
      case SorterType.QUICK: return new QuickSorter()
      case SorterType.SELECTION: return new SelectionSorter()
      case SorterType.SHELL: return new ShellSorter()
      case SorterType.TIM: return new TimSorter()
    }
  }
  
}