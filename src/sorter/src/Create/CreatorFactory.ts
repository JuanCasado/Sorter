
import Creator from './Creator'
import CreatorType from './CreatorType'
import ICreatorFactory from './ICreatorFactory'
import OrderedCreator from './OrderedCreator'
import SemiOrderedCreator from './SemiOrderedCreator'
import RandomCreator from './RandomCreator'

export default class CreatorFactory implements ICreatorFactory {

  public createCreator (creator : CreatorType) : Creator {
    switch(creator) {
      case CreatorType.ORDERED: return new OrderedCreator()
      case CreatorType.SEMI_ORDERED: return new SemiOrderedCreator()
      case CreatorType.RANDOM: return new RandomCreator()
    }
  }

}