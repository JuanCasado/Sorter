
import Creator from './Creator'
import Creatable from './Creatable'
import ComparatorType from '../Compare/ComparatorType'

export default class OrderedCreator implements Creator {

  async create (creatable : Creatable, comparator : ComparatorType = ComparatorType.MAX) {
    switch(comparator){
      case ComparatorType.MAX: return await this.createMaximum(creatable)
      case ComparatorType.MIN: return await this.createMinimum(creatable)
    }
  }

  private async createMaximum (creatable : Creatable) {
    for (let i = 0; i < creatable.size(); ++i){
      await creatable.setAt(i, (creatable.size()-1)-i)
    }
  }

  private async createMinimum (creatable : Creatable) {
    for (let i = 0; i < creatable.size(); ++i){
      await creatable.setAt(i, i)
    }
  }

}