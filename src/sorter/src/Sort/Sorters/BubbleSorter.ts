
import Sorter from './Sorter'
import Sortable from '../Sortable'
import Comparator from '../../Compare/Comparator'
import Comparison from '../../Compare/Comparison'

export default class BubbleSorter implements Sorter {
  
  public async sort (sortable : Sortable, comparator : Comparator) : Promise<Sortable> {
    return new Promise<Sortable>(async (resolve)=>{
      let sorted = 0
      for (let i = 0; i  < sortable.size(); ++i){
        for (let j = 1; j  < sortable.size() - sorted; ++j){
          if(comparator.compare(await sortable.get(j-1), await sortable.get(j)) === Comparison.RIGHT){
            await sortable.switch(j-1, j)
          }
        }
        ++sorted;
      }
      resolve(sortable)
    })
  }
  

}