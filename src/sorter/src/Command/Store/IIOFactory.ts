
import Saver from './Saver'
import Loader from './Loader'


export default interface IIOFactory {
  
  createSaver () : Saver 
  createLoader () : Loader 

}