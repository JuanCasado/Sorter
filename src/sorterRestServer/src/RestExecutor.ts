
import SimulationExecutor from '../../sorter/src/Simulate/Execute/SimulationExecutor'
import Simulation from '../../sorter/src/Simulate/Simulation'
import Sort, { SortFactoryType, ElementHolderType } from '../../sorter/src/Sort'

import RestObserver from './RestObserver'

export default class RestExecutor implements SimulationExecutor {

  private rest : RestObserver

  constructor (rest : RestObserver) {
    this.rest = rest
  }

  public async execute (simulation : Simulation) {
    const sort = Sort.getInstance()
    const size = simulation.size!

    const elements = sort.createElementHolder(ElementHolderType.DELAYED_OBSERVABLE, size)
    const sortFactory = sort.createSortFactory(SortFactoryType.LOCAL)
    elements.subscribe(this.rest)

    const creator = sort.createCreator(simulation.create!)
    const sorter = sortFactory.createSorter(simulation.sort!)
    const comparator = sort.createComparator(simulation.sortDirection!)

    await creator.create(elements, simulation.createDirection!)
    await sorter.sort(elements, comparator)
    elements.unsubscribe(this.rest)
    this.rest.end()
    return
  }

}