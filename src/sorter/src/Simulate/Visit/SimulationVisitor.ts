
import Simulation from '../Simulation'
import SimulationExecutor from '../Execute/SimulationExecutor'

export default interface SimulationVisitor {
  simulate (simulation : Simulation, executor : SimulationExecutor) : Promise<void>
}