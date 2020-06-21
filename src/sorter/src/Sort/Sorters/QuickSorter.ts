
import Sorter from './Sorter'
import Sortable from '../Sortable'
import Comparator from '../../Compare/Comparator'
import Comparison from '../../Compare/Comparison'

export default class QuickSorter implements Sorter {
  
  public async sort (sortable : Sortable, comparator : Comparator) : Promise<Sortable> {
    return new Promise<Sortable>(async (resolve)=>{
      await this.quickSort (sortable, comparator, 0, sortable.size()-1)
      resolve(sortable)
    })
  }

  private async quickSort (sortable : Sortable, comparator : Comparator, start : number, end : number) : Promise<Sortable> {
    return new Promise<Sortable>(async (resolve)=>{
      if ((end - start) <= 1){
        resolve(sortable);return
      }
      const pivot = await sortable.get(Math.floor(Math.random() * (end - start) + start))
      let left = start
      let right = end
      for (let i = start; i <= right; ++i) {
        switch (comparator.compare(await sortable.get(i), pivot)) {
          case Comparison.RIGHT: await sortable.switch(i, right); --right; --i;break
          case Comparison.LEFT: await sortable.switch(i, left); ++left; break
        }
      }
      await this.quickSort (sortable, comparator, start, left-(right===left?1:0))
      await this.quickSort (sortable, comparator, right, end)
      resolve(sortable)
    })
  }

}