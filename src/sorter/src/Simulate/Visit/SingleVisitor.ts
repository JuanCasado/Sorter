
import SimulationVisitor from './SimulationVisitor'
import Simulation from '../Simulation'
import SimulationExecutor from '../Execute/SimulationExecutor'

export default class SingleVisitor implements SimulationVisitor {
  
  public async simulate (simulation : Simulation, executor : SimulationExecutor) : Promise<void> {
    return executor.execute(simulation)
  }

}