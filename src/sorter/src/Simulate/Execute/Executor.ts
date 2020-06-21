
import SimulationExecutor from './SimulationExecutor'
import Simulation from '../Simulation'
import Sort, { SortFactoryType, ElementHolderType } from '../../Sort'

import ViewType from '../../View/ViewType'
import Window from '../../View/Window'

export default class Executor implements SimulationExecutor {

  public async execute (simulation : Simulation, viewType : ViewType) {
    const sort = Sort.getInstance()
    const size = simulation.size!

    const elements = sort.createElementHolder(ElementHolderType.DELAYED_OBSERVABLE, size)
    const sortFactory = sort.createSortFactory(SortFactoryType.LOCAL)
    const store = sort.createCommandStore()

    if (simulation.save!) {elements.subscribe(store)}
    if (viewType !== ViewType.NONE) {
      Window.getInstance().display(simulation.view!)
      Window.getInstance().view(elements)
      elements.subscribe(Window.getInstance())
    }

    const creator = sort.createCreator(simulation.create!)
    const sorter = sortFactory.createSorter(simulation.sort!)
    const comparator = sort.createComparator(simulation.sortDirection!)

    await creator.create(elements, simulation.createDirection!)
    await sorter.sort(elements, comparator)

    elements.unsubscribe(store)
    elements.unsubscribe(Window.getInstance())
    if (simulation.save!) {
      elements.subscribe(store)
      store.save('simulation.json')
    }

    return
  }

}