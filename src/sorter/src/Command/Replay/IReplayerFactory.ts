
import ReplayerType from './ReplayerType'
import Replayer from './Replayer'

export default interface ReplayerFactory {
  
  createReplayer(replayer : ReplayerType) : Replayer

}