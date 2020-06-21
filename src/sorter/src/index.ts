
import ViewType from './View/ViewType'
import Window from './View/Window'

import Sort from './Sort'

import SimulatorBuilderType from './Simulate/SimulationBuilderType'
import SimulationBuilderFactory from './Simulate/SimulationBuilderFactory'
import StepVisitor from './Simulate/Visit/StepVisitor'
import SimulationExecutor from './Simulate/Execute/SimulationExecutor'
import Executor from './Simulate/Execute/Executor'
import WSExecutor from './Simulate/Execute/WSExecutor'
import RestExecutor from './Simulate/Execute/RestExecutor'

const askExecutor = (question : string) : SimulationExecutor => {
  switch (window.prompt(question)){
    case 'REST': return new RestExecutor()
    case 'WS': return new WSExecutor()
    default: return new Executor()
  }
}

(async () => {
  const sort = Sort.getInstance()
  const simulationBuilderFactory = new SimulationBuilderFactory()
  while (true)  {
    Window.getInstance().display(ViewType.NONE)
    const simulationBuilder = simulationBuilderFactory.createSimulationBuilder(SimulatorBuilderType.JSON)
    const simulation = await sort.createSimulation(simulationBuilder)
    Window.getInstance().display(ViewType.LIST)
    const visitor = new StepVisitor()
    const executor = askExecutor('Which executor should be used? (LOCAL | REST | WS)')
    await visitor.simulate(simulation, executor)
  }
})()


