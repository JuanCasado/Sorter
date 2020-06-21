
import Simulation from './Simulation'
import SimulationBuilder from './SimulationBuilder'

export default interface ISimulator {

  createSimulation (simulation : SimulationBuilder) : Promise<Simulation> 

}