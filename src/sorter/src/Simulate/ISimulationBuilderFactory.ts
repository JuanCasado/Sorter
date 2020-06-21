
import SimulationBuilder from './SimulationBuilder'
import SimulationBuilderType from './SimulationBuilderType'

export default interface ISimulationBuilderFactory {
  createSimulationBuilder(builder : SimulationBuilderType) : SimulationBuilder
}