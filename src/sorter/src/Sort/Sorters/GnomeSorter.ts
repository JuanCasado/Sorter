
import Sorter from './Sorter'
import Sortable from '../Sortable'
import Comparator from '../../Compare/Comparator'
import Comparison from '../../Compare/Comparison'

export default class InsertionSorter implements Sorter {
  
  public async sort (sortable : Sortable, comparator : Comparator) : Promise<Sortable> {
    return new Promise<Sortable>(async (resolve)=>{
      let current = 0
      while (current < sortable.size()) {
        if (current === 0)
          ++ current
        if (comparator.compare(await sortable.get(current), await sortable.get(current-1)) === Comparison.RIGHT)
          ++ current
        else {
          sortable.switch(current, current-1)
          -- current
        }
      }
      resolve(sortable)
    })
  }

}