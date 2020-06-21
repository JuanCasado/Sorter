
import Sorter from './Sorter'
import Sortable from '../Sortable'
import Comparator from '../../Compare/Comparator'
import Comparison from '../../Compare/Comparison'

export default class InsertionSorter implements Sorter {
  
  public async sort (sortable : Sortable, comparator : Comparator) : Promise<Sortable> {
    return new Promise<Sortable>(async (resolve)=>{
      let sorted = 0
      for (let i = 0; i < sortable.size(); ++i) {
        let best = sorted
        for (let j = sorted+1; j < sortable.size(); ++j) {
          if (comparator.compare(await sortable.get(best), await sortable.get(j)) === Comparison.RIGHT) {
            best = j
          }
        }
        await sortable.switch(best,sorted)
        ++sorted
      }
      resolve(sortable)
    })
  }

}