
import Replayer from './Command/Replay/Replayer'
import ReplayerType from './Command/Replay/ReplayerType'
import ReplayerFactory from './Command/Replay/ReplayerFactory'
import IReplayerFactory from './Command/Replay/IReplayerFactory'

import Comparator from './Compare/Comparator'
import ComparatorType from './Compare/ComparatorType'
import ComparatorFactory from './Compare/ComparatorFactory'
import IComparatorFactory from './Compare/IComparatorFactory'


import Creator from './Create/Creator'
import CreatorType from './Create/CreatorType'
import CreatorFactory from './Create/CreatorFactory'
import ICreatorFactory from './Create/ICreatorFactory'

import CommandStore from './Command/Store/CommandStore'
import CommandStoreFactory from './Command/Store/CommandStoreFactory'
import ICommandStoreFactory from './Command/Store/ICommandStoreFactory'


import SortFactory from './Sort/SortFactory'
import SortFactoryType from './Sort/SortFactoryType'
import SortAbstractFactory from './Sort/SortAbstractFactory'
import ISortAbstractFactory from './Sort/ISortAbstractFactory'

import ElementHolder from './Hold/ElementHolder'
import ElementHolderType from './Hold/ElementHolderType'
import ElementHolderFactory from './Hold/ElementHolderFactory'
import IElementHolderFactory from './Hold/IElementHolderFactory'
import ElementHolderDecoratorType from './Hold/Decorate/ElementHolderDecoratorType'
import CommandBridge from './Hold/CommandBridge'

import ISimulationDirector from './Simulate/ISimulationDirector'
import SimulationDirector from './Simulate/SimulationDirector'
import SimulationBuilder from './Simulate/SimulationBuilder'
import Simulation from './Simulate/Simulation'

import SortType from './Sort/SortType'
import Delayable from './Hold/Decorate/Delayable'

export { ReplayerType, ComparatorType, CreatorType, SortFactoryType, SortType, ElementHolderType }

export default class Sort implements IReplayerFactory, IComparatorFactory, ICreatorFactory, ICommandStoreFactory, ISortAbstractFactory, IElementHolderFactory, ISimulationDirector {

  private static readonly replayerFactory : IReplayerFactory = new ReplayerFactory()
  private static readonly comparatorFactory : IComparatorFactory = new ComparatorFactory()
  private static readonly creatorFactory : ICreatorFactory = new CreatorFactory()
  private static readonly commandStoreFactory : ICommandStoreFactory = new CommandStoreFactory()
  private static readonly sortAbstractFactory : ISortAbstractFactory = new SortAbstractFactory()
  private static readonly elementHolderFactory : IElementHolderFactory = new ElementHolderFactory()
  private static readonly simulationDirector : ISimulationDirector = new SimulationDirector()

  private static readonly self : Sort = new Sort()
  private constructor(){}

  public static getInstance () : Sort {
    return Sort.self;
  }

  public createReplayer(replayer : ReplayerType) : Replayer {
    return Sort.replayerFactory.createReplayer(replayer)
  }

  public createComparator (comparator : ComparatorType) : Comparator {
    return Sort.comparatorFactory.createComparator(comparator)
  }

  public createCreator (creator : CreatorType) : Creator {
    return Sort.creatorFactory.createCreator(creator)
  }

  public createCommandStore () : CommandStore {
    return Sort.commandStoreFactory.createCommandStore()
  }

  public createSortFactory (factory : SortFactoryType) : SortFactory {
    return Sort.sortAbstractFactory.createSortFactory(factory)
  }

  public createElementHolder (elementHolder : ElementHolderType, size : number) : ElementHolder {
    return Sort.elementHolderFactory.createElementHolder(elementHolder, size)
  }

  public decorate (elementHolder : ElementHolder, decorators : ElementHolderDecoratorType []) : ElementHolder {
    return Sort.elementHolderFactory.decorate(elementHolder, decorators)
  }

  public makeCommandable (elementHolder : ElementHolder) : CommandBridge {
    return Sort.elementHolderFactory.makeCommandable(elementHolder)
  }

  public setDelay (number : number) {
    return Delayable.setDelay(number)
  }

  public getDelay () {
    return Delayable.getDelay()
  }

  public createSimulation (builder : SimulationBuilder) : Promise<Simulation> {
    return Sort.simulationDirector.createSimulation(builder)
  }

}

