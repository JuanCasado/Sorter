
import SimulationExecutor from './SimulationExecutor'
import Simulation from '../Simulation'
import Sort, { ElementHolderType } from '../../Sort'
import CommandBridge from '../../Hold/CommandBridge'
import CommandParser from '../../Command/CommandParser'

import ViewType from '../../View/ViewType'
import Window from '../../View/Window'

export default class WSExecutor implements SimulationExecutor {

  public async execute (simulation : Simulation, viewType : ViewType) {
    const sort = Sort.getInstance()
    const size = simulation.size!
    const elements = sort.createElementHolder(ElementHolderType.OBSERVABLE, size)
    const commandParser = new CommandParser()
    const commandBridge = new CommandBridge(elements)
    const store = sort.createCommandStore()
    if (simulation.save!) {elements.subscribe(store)}

    if (viewType !== ViewType.NONE) {
      Window.getInstance().display(simulation.view!)
      Window.getInstance().view(elements)
      elements.subscribe(Window.getInstance())
    }

    const simulate = async () : Promise<void> => {
      return new Promise<void> ((resolve)=>{
        const ws = new WebSocket('ws://localhost:8080')
        ws.addEventListener('open',()=>{
          ws.addEventListener('message', (message)=>{
            const command = commandParser.getCommand(JSON.parse(message.data))
            if (command !== undefined) commandBridge.readCommand(command!)
          })
          ws.addEventListener('close', ()=>{
            resolve()
          })
          ws.send(JSON.stringify(simulation));
        })
      })
    }
    await simulate()

    elements.unsubscribe(Window.getInstance())
    elements.unsubscribe(store)
    return
  }

}