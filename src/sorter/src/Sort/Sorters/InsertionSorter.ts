
import Sorter from './Sorter'
import Sortable from '../Sortable'
import Comparator from '../../Compare/Comparator'
import Comparison from '../../Compare/Comparison'

export default class InsertionSorter implements Sorter {
  
  public async sort (sortable : Sortable, comparator : Comparator) : Promise<Sortable> {
    return new Promise<Sortable>(async (resolve)=>{
      for (let i = 0; i < sortable.size(); ++i) {
        for (let j = 0; j < sortable.size(); ++j) {
          if (comparator.compare(await sortable.get(i), await sortable.get(j)) === Comparison.LEFT) {
            await sortable.switch(i,j)
          }
        }
      }
      resolve(sortable)
    })
  }

}