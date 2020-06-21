
import Sorter from './Sorter'
import Sortable from '../Sortable'
import Comparator from '../../Compare/Comparator'
import Comparison from '../../Compare/Comparison'

async function print (sortable : Sortable) {
  let acc = ''
  for (let i = 0; i < sortable.size(); ++i) {
    acc += await (await sortable.get(i)).getValue()+','
  }
  console.log(acc)
}

export default class HeapSorter implements Sorter {

  public async sort (sortable : Sortable, comparator : Comparator) : Promise<Sortable> {
    return new Promise<Sortable>(async (resolve)=>{
      for (let i = sortable.size()/2 - 1; i >= 0; --i) {
        await this.makeHeap(sortable, comparator, i, sortable.size())
      }
      await print(sortable)
      for (let i = sortable.size()-1; i > 0; --i) {
        await sortable.switch(0, i)
        await this.makeHeap(sortable, comparator, 0, i)
      }
      resolve(sortable)
    })
  }
  
  private async makeHeap (sortable : Sortable, comparator : Comparator, root : number, size : number) {
    let largest = root
    let left = 2 * root + 1
    let right = 2 * root + 2
    if ((left < size) && (comparator.compare(await sortable.get(left), await sortable.get(largest)) === Comparison.RIGHT))
      largest = left
    if ((right < size) && (comparator.compare(await sortable.get(right), await sortable.get(largest)) === Comparison.RIGHT))
      largest = right
    if (largest !== root)  { 
      await sortable.switch(root, largest)
      await this.makeHeap(sortable, comparator, largest, size)
    }
  }

}