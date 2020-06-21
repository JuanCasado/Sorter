
import Creator from './Creator'
import CreatorType from './CreatorType'

export default interface ICreatorFactory {

  createCreator (creator : CreatorType) : Creator 

}