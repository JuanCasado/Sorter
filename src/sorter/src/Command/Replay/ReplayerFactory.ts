
import ReplayerType from './ReplayerType'
import Replayer from './Replayer'
import InstantReplayer from './InstantReplayer'
import RealReplayer from './RealReplayer'

export default class ReplayerFactory {
  
  public createReplayer(replayer : ReplayerType) : Replayer{
    switch(replayer) {
      case ReplayerType.INSTANT: return new InstantReplayer()
      case ReplayerType.REAL: return new RealReplayer()
    }
  }


}