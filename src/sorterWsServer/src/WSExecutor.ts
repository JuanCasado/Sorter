
import SimulationExecutor from '../../sorter/src/Simulate/Execute/SimulationExecutor'
import Simulation from '../../sorter/src/Simulate/Simulation'
import Sort, { SortFactoryType, ElementHolderType } from '../../sorter/src/Sort'

import WSObserver from './WSObserver'

export default class WSExecutor implements SimulationExecutor {

  private ws : WSObserver

  constructor (ws : WSObserver) {
    this.ws = ws
  }

  public async execute (simulation : Simulation) {
    const sort = Sort.getInstance()
    const size = simulation.size!

    const elements = sort.createElementHolder(ElementHolderType.DELAYED_OBSERVABLE, size)
    const sortFactory = sort.createSortFactory(SortFactoryType.LOCAL)
    elements.subscribe(this.ws)

    const creator = sort.createCreator(simulation.create!)
    const sorter = sortFactory.createSorter(simulation.sort!)
    const comparator = sort.createComparator(simulation.sortDirection!)

    await creator.create(elements, simulation.createDirection!)
    await sorter.sort(elements, comparator)
    elements.unsubscribe(this.ws)
    this.ws.end()
    return
  }

}