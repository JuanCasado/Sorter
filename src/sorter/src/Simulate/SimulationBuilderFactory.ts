
import ISimulationBuilderFactory from './ISimulationBuilderFactory'
import SimulationBuilderType from './SimulationBuilderType'
import SimulationBuilder from './SimulationBuilder'
import SimulationBuilderJSON from './SimulationBuilderJSON'
import SimulationBuilderUSER from './SimulationBuilderUSER'

export default class SimulationBuilderFactory implements ISimulationBuilderFactory {
  public createSimulationBuilder (builder : SimulationBuilderType) : SimulationBuilder {
    switch (builder) {
      case SimulationBuilderType.JSON : return new SimulationBuilderJSON()
      case SimulationBuilderType.USER : return new SimulationBuilderUSER()
    }
  }
}