
import ISimulationDirector from './ISimulationDirector'
import Simulation from './Simulation'
import SimulationBuilder from './SimulationBuilder'

export default class SimulationDirector implements ISimulationDirector {

  public async createSimulation (builder : SimulationBuilder) : Promise<Simulation> {
    return new Promise<Simulation> (async(resolve)=>{
      while(builder.isReady()) {
        await builder.readType()
        await builder.readSize()
        await builder.readSort()
        await builder.readSortDirection()
        await builder.readCreator()
        await builder.readCreatorDirection()
        await builder.readSave()
        await builder.readView()
        const next = await builder.readNext()
        if (!next)
        while(!await builder.readSimultaneous() && builder.isReady());
      }
      resolve(builder.getSimulation())
    })
  }

}