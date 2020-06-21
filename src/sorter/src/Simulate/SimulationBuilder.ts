
import Simulation from './Simulation'

export default interface SimulationBuilder {

  readSize () : Promise<void>
  readType () : Promise<void>
  readSave () : Promise<void>
  readSort () : Promise<void>
  readSortDirection () : Promise<void>
  readCreator () : Promise<void>
  readCreatorDirection () : Promise<void>
  readView () : Promise<void>
  readNext () : Promise<boolean>
  readSimultaneous () : Promise<boolean>

  isReady () : boolean
  getSimulation () : Simulation

}