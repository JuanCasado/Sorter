
import Sorter from './Sorter'
import Sortable from '../Sortable'
import Comparator from '../../Compare/Comparator'
import Comparison from '../../Compare/Comparison'

export default class CocktailSorter implements Sorter {
  
  public async sort (sortable : Sortable, comparator : Comparator) : Promise<Sortable> {
    return new Promise<Sortable>(async (resolve)=>{
      let sortedRight = 0
      let sortedLeft = 0
      for (let i = 0; i  < Math.ceil(sortable.size()/2); ++i){
        for (let j = 1; j  < sortable.size() - sortedRight; ++j){
          if(comparator.compare(await sortable.get(j-1), await sortable.get(j)) === Comparison.RIGHT){
            await sortable.switch(j-1, j)
          }
        }
        ++ sortedRight;
        for (let j = sortable.size()-2; j > sortedLeft ; --j){
          if(comparator.compare(await sortable.get(j+1), await sortable.get(j)) === Comparison.LEFT){
            await sortable.switch(j+1, j)
          }
        }
        ++sortedLeft;
      }
      resolve(sortable)
    })
  }
  

}