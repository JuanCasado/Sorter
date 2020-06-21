
import Creator from './Creator'
import Creatable from './Creatable'
import ComparatorType from '../Compare/ComparatorType'
import CreatorType from './CreatorType'
import CreatorFactory from './CreatorFactory'

export default class SemiOrderedCreator implements Creator {

  async create (creatable : Creatable, comparator : ComparatorType = ComparatorType.MAX) {
    const creatorFactory = new CreatorFactory()
    const orderedCreator = creatorFactory.createCreator(CreatorType.ORDERED)
    await orderedCreator.create(creatable, comparator)
    const maxJump = creatable.size()/5
    for (let current = 0; current < creatable.size(); ++current) {
      const jump = Math.min(creatable.size()-1, Math.max(0, current + Math.floor(Math.random() * maxJump - maxJump/2)))
      const atCurrent = creatable.getAt(current)
      const atJump = creatable.getAt(jump)
      await creatable.setAt(jump, atCurrent)
      await creatable.setAt(current, atJump)
    }
  }

}