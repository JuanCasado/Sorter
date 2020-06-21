
import SimulationBuilderBase from './SimulationBuilderBase'

export default class SimulationBuilderJSON extends SimulationBuilderBase {

  private data : Promise<any>

  constructor () {
    super()
    this.data = new Promise <any> (async (resolve, reject) => {
      const root = document.getElementById('root')
      const cancel = (e: any) => {e.stopPropagation();e.preventDefault();}
      root!.addEventListener('dragenter', cancel, false);
      root!.addEventListener('dragover', cancel, false);
      root!.addEventListener('drop', async (event : any) => {
        cancel(event)
        if (event!.dataTransfer.files!.length > 0) {
          const fr = new FileReader();
          fr.onload = (event : any) => {
            resolve(JSON.parse(event.target.result))
          }
          fr.readAsText(event!.dataTransfer.files![0])
        } else {
          reject()
        }
        root!.removeEventListener('dragenter', cancel)
        root!.removeEventListener('dragover', cancel)
        root!.removeEventListener('drop', cancel)
      }, false)
    })
  }

  public async readSize () {
    const size = this.validateNumber(this.currentSimulation(await this.data).size+'')
    if (size.valid)
      this.currentSimulation().size = size.content!
    else
      throw Error('Invalid size: ' + this.currentSimulation(await this.data).size)
  }

  public async readType () {
    const type = this.validateSimulation(this.currentSimulation(await this.data).type+'')
    if (type.valid)
      this.currentSimulation().type = type.content!
    else
      throw Error('Invalid type: ' + this.currentSimulation(await this.data).type)
  }

  public async readSave () {
    const save = this.validateBoolean(this.currentSimulation(await this.data).save+'')
    if (save.valid)
      this.currentSimulation().save = save.content!
    else
      throw Error('Invalid save: ' + this.currentSimulation(await this.data).save)
  }

  public async readSort () {
    const sort = this.validateSort(this.currentSimulation(await this.data).sort+'')
    if (sort.valid)
      this.currentSimulation().sort = sort.content!
    else
      throw Error('Invalid sort: ' + this.currentSimulation(await this.data).sort)
  }

  public async readSortDirection () {
    const sortDirection = this.validateDirection(this.currentSimulation(await this.data).sortDirection+'')
    if (sortDirection.valid)
      this.currentSimulation().sortDirection = sortDirection.content!
    else
      throw Error('Invalid SortDirection: ' + this.currentSimulation(await this.data).sortDirection)
  }

  public async readCreator () {
    const create = this.validateCreator(this.currentSimulation(await this.data).create+'')
    if (create.valid)
      this.currentSimulation().create = create.content!
    else
      throw Error('Invalid Creator: ' + this.currentSimulation(await this.data).create)
  }

  public async readCreatorDirection () {
    const createDirection = this.validateDirection(this.currentSimulation(await this.data).createDirection+'')
    if (createDirection.valid)
      this.currentSimulation().sortDirection = createDirection.content!
    else
      throw Error('Invalid CreateDirection: ' + this.currentSimulation(await this.data).createDirection)
  }

  public async readView () {
    const view = this.validateView(this.currentSimulation(await this.data).view+'')
    if (view.valid)
      this.currentSimulation().view = view.content!
    else
      throw Error('Invalid View: ' + this.currentSimulation(await this.data).view)
  }

  public async readNext () {
    const next = this.currentSimulation(await this.data).next && this.currentSimulation(await this.data).next.length > 0
    this.addNext(next)
    return next
  }

  public async readSimultaneous () {
    const readingIndex = this.getReadingIndex ()
    let previousSimulation = await this.data
    for (let i = 0; i < readingIndex.length; ++i) {
      previousSimulation = previousSimulation.next[readingIndex[i]]
    }
    const simultaneous = previousSimulation.next.length < readingIndex[readingIndex.length-1]
    this.addSimultaneous(simultaneous)
    return simultaneous
  }

}