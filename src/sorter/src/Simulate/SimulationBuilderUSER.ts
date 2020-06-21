
import SimulationBuilderBase from './SimulationBuilderBase'

export default class SimulationBuilderUSER extends SimulationBuilderBase {

  public async readSize () {
    return new Promise<void> ((resolve) => {
      let size
      do {
        size = this.validateNumber(window.prompt('Elements to sort: (Number)'))
      } while (!size.valid)
      this.currentSimulation().size = size.content!
      resolve()
    })
  }

  public async readType () {
    return new Promise<void> ((resolve) => {
      let type
      do {
        type = this.validateSimulation(window.prompt('Simulation Type: ( LOCAL_DELAY | LOCAL_REAL | WS_DELAY | WS_REAL | REST_DELAY | REST_REAL )'))
      } while (!type.valid)
      this.currentSimulation().type = type.content!
      resolve()
    })
  }

  public async readSave () {
    return new Promise<void> ((resolve) => {
      let save
      do {
        save = this.validateBoolean(window.prompt('Save on end: ( YES | NO )'))
      } while (!save.valid)
      this.currentSimulation().save = save.content!
      resolve()
    })
  }

  public async readSort () {
    return new Promise<void> ((resolve) => {
      let sort
      do {
        sort = this.validateSort(window.prompt('Sorting algorithm: ( BUBBLE | COCKTAIL | INSERT | GNOME | HEAP | QUICK | MERGE | SELECTION | SHELL | TIM )'))
      } while (!sort.valid)
      this.currentSimulation().sort = sort.content!
      resolve()
    })
  }
  public async readSortDirection () {
    return new Promise<void> ((resolve) => {
      let sortDirection
      do {
        sortDirection = this.validateDirection(window.prompt('Sorting direction: ( MAX | MIN )'))
      } while (!sortDirection.valid)
      this.currentSimulation().sortDirection = sortDirection.content!
      resolve()
    })
  }

  public async readCreator () {
    return new Promise<void> ((resolve) => {
      let create
      do {
        create = this.validateCreator(window.prompt('Creator type: ( ORDERED | SEMI_ORDERED | RANDOM )'))
      } while (!create.valid)
      this.currentSimulation().create = create.content!
      resolve()
    })
  }

  public async readCreatorDirection () {
    return new Promise<void> ((resolve) => {
      let createDirection
      do {
        createDirection = this.validateDirection(window.prompt('Creator direction: ( MAX | MIN )'))
      } while (!createDirection.valid)
      this.currentSimulation().createDirection = createDirection.content!
      resolve()
    })
  }

  public async readView () {
    return new Promise<void> ((resolve) => {
      let view
      do {
        view = this.validateView(window.prompt('View type: ( LIST | MATRIX | PROGRESS | NONE )'))
      } while (!view.valid)
      this.currentSimulation().view = view.content!
      resolve()
    })
  }

  public async readNext () {
    return new Promise<boolean> ((resolve) => {
      let next
      do {
        next = super.validateBoolean(window.prompt('Simulate other next: ( YES | NO )'))
      } while (!next.valid)
      this.addNext(next.content!)
      resolve(next.content!)
    })
  }

  public async readSimultaneous () {
    return new Promise<boolean> ((resolve) => {
      let next
      do {
        next = super.validateBoolean(window.prompt('Simulate other simultaneous: ( YES | NO )'))
      } while (!next.valid)
      this.addSimultaneous(next.content!)
      resolve(next.content!)
    })
  }

}