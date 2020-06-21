
import SimulationExecutor from './SimulationExecutor'
import Simulation from '../Simulation'
import Sort, { ElementHolderType } from '../../Sort'
import CommandBridge from '../../Hold/CommandBridge'
import CommandParser from '../../Command/CommandParser'

import ViewType from '../../View/ViewType'
import Window from '../../View/Window'

import axios from 'axios'
const url = 'http://localhost:8081/'

export default class RestExecutor implements SimulationExecutor {

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
      return new Promise<void> (async (resolve)=>{
        const key = (await axios.post(url, simulation)).data
        let keep = true
        do {
          try {
            const command = commandParser.getCommand((await axios.post(url, {id: key})).data)
            if (command !== undefined) {
              commandBridge.readCommand(command!)
            } else {
              keep=false
            }
          }catch{console.log('missed')}
        } while(keep)
        resolve()
      })
    }
    await simulate()

    elements.unsubscribe(Window.getInstance())
    elements.unsubscribe(store)
    return
  }

}