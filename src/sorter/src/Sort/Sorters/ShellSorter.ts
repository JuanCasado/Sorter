
import Sorter from './Sorter'
import Sortable from '../Sortable'
import Comparator from '../../Compare/Comparator'
import Comparison from '../../Compare/Comparison'

export default class ShellSorter implements Sorter {
  
  public async sort (sortable : Sortable, comparator : Comparator) : Promise<Sortable> {
    return new Promise<Sortable>(async(resolve)=>{
      for (let step = Math.floor(sortable.size() / 2); step > 0; step = Math.floor(step/2)){
        for (let i = step; i < sortable.size(); ++i) {
          for (let j = i; j >= step && comparator.compare(await sortable.get(j - step), await sortable.get(j)) === Comparison.RIGHT; j -= step) {
            await sortable.switch(j, j - step)
          }
        }
      }
      resolve(sortable)
    })
  }
  

}
