
import Sorter from './Sorter'
import Sortable from '../Sortable'
import Comparator from '../../Compare/Comparator'
import Comparison from '../../Compare/Comparison'

export default class TimSorter implements Sorter {

  private readonly bucketSize = 32
  
  public async sort (sortable : Sortable, comparator : Comparator) : Promise<Sortable> {
    return new Promise<Sortable>(async (resolve)=>{
      await this.timSort(sortable, comparator, 0, sortable.size()-1)
      resolve(sortable)
    })
  }

  private async timSort (sortable : Sortable, comparator : Comparator, start : number, end : number) : Promise<Sortable> {
    return new Promise<Sortable>(async (resolve)=>{
      const size = end-start
      if (size <= this.bucketSize) {
        for (let i = start; i <= end; ++i) {
          for (let j = start; j <= end; ++j) {
            if (comparator.compare(await sortable.get(i), await sortable.get(j)) === Comparison.LEFT) {
              await sortable.switch(i,j)
            }
          }
        }
        resolve(sortable);return
      }
      let half = Math.floor(size / 2) + start
      await this.timSort (sortable, comparator, start, half-1)
      await this.timSort (sortable, comparator, half, end)
      let [i, left, right] = [start, start, half]
      while (left < half && right <= end) {
        if (comparator.compare(await sortable.get(left), await sortable.get(right))===Comparison.RIGHT) {
          for (let j = right-1; j >= left; --j){
            await sortable.switch(j, j+1)
          }
          ++right; ++left; ++half
        } else {
          ++left
        }
        ++i
      }
      
      while (right <= end) {
        await sortable.switch(i, right)
        ++right
        ++i
      }
      while (left < half) {
        await sortable.switch(i, left)
        ++left
        ++i
      }
      resolve(sortable)
    })
  }
  

}