
import Saver from './Saver'
import NodeSaver from './NodeSaver'
import BrowserSaver from './BrowserSaver'
import Loader from './Loader'
import NodeLoader from './NodeLoader'
import BrowserLoader from './BrowserLoader'
import IIOFactory from './IIOFactory'

export default class IOFactory implements IIOFactory {
  
  private isNode () : boolean {
    return typeof module !== 'undefined' && module.exports
  }

  public createSaver () : Saver {
    if (this.isNode())
      return new NodeSaver()
    else 
      return new BrowserSaver()
  }

  public createLoader () : Loader {
    if (this.isNode())
      return new NodeLoader()
    else 
      return new BrowserLoader()
  }

}