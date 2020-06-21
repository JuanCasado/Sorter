
import SimulationVisitor from './SimulationVisitor'
import Simulation from '../Simulation'
import SimulationExecutor from '../Execute/SimulationExecutor'

import Window from '../../View/Window'
import ViewType from '../../View/ViewType'

export default class StepVisitor implements SimulationVisitor {

  private windowTaken : boolean = Window.getInstance().getViewType() === ViewType.NONE
  
  public async simulate (simulation : Simulation, executor : SimulationExecutor) : Promise<void> {
    const runningExecutions = simulation.next.map((simulationChild : Simulation)=>{
      const view = this.windowTaken? ViewType.NONE : Window.getInstance().getViewType()
      if (view !== ViewType.NONE) {
        this.windowTaken = false
      }
      return executor.execute(simulationChild, view)
    })
    this.windowTaken = Window.getInstance().getViewType() === ViewType.NONE
    await Promise.all(runningExecutions)
    const runningSimulations = simulation.next.map((simulationChild : Simulation)=>{
      return this.simulate(simulationChild,executor)
    })
    await Promise.all(runningSimulations)
    return
  }

}