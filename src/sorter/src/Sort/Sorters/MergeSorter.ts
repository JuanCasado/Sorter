
import Sorter from './Sorter'
import Sortable from '../Sortable'
import Comparator from '../../Compare/Comparator'
import Comparison from '../../Compare/Comparison'

export default class MergeSorter implements Sorter {
  
  public async sort (sortable : Sortable, comparator : Comparator) : Promise<Sortable> {
    return new Promise<Sortable>(async (resolve)=>{
      await this.mergeSort (sortable, comparator, 0, sortable.size()-1)
      resolve(sortable)
    })
  }

  private async mergeSort (sortable : Sortable, comparator : Comparator, start : number, end : number) : Promise<Sortable> {
    return new Promise<Sortable>(async (resolve)=>{
      const size = end-start
      if (size < 1){
        resolve(sortable);return
      }else if (size === 1) {
        if (comparator.compare(await sortable.get(start), await sortable.get(end))===Comparison.RIGHT) {
          await sortable.switch(start,end)
        }
        resolve(sortable);return
      }
      let half = Math.floor(size / 2) + start
      await this.mergeSort (sortable, comparator, start, half-1)
      await this.mergeSort (sortable, comparator, half, end)
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