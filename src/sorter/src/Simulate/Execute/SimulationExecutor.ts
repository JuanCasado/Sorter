
import Simulation from '../Simulation'
import ViewType from '../../View/ViewType'

export default interface SimulationExecutor {
  execute (simulation : Simulation, viewType? : ViewType) : Promise<void>
}