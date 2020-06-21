
import Creator from './Creator'
import Creatable from './Creatable'

export default class RandomCreator implements Creator {

  async create (creatable : Creatable) {
    const values = []
    for (let i = 0; i < creatable.size(); ++i) {
      values.push(i)
    }
    for (let i = 0; i < creatable.size(); ++i){
      const index = Math.floor(Math.random() * values.length)
      await creatable.setAt(i, values[index])
      values.splice(index, 1)
    }
  }

}