
import SimulationType from './SimulationType'
import CreatorType from '../Create/CreatorType'
import SortType from '../Sort/SortType'
import ComparatorType from '../Compare/ComparatorType'
import ViewType from '../View/ViewType'

interface SimulationContent {
  size? : number
  type? : SimulationType
  save? : boolean
  sort? : SortType
  sortDirection? : ComparatorType
  create? : CreatorType
  createDirection? : ComparatorType
  view? : ViewType
  next : SimulationContent[]
}

export default class Simulation {
  public size? : number
  public type? : SimulationType
  public save? : boolean
  public sort? : SortType
  public sortDirection? : ComparatorType
  public create? : CreatorType
  public createDirection? : ComparatorType
  public view? : ViewType
  public next : Simulation[] = []

  constructor (content : SimulationContent) {
    this.size = content.size
    this.type = content.type
    this.save = content.save
    this.sort = content.sort
    this.sortDirection = content.sortDirection
    this.create = content.create
    this.createDirection = content.createDirection
    this.view = content.view
    for (let next of content.next) {
      this.next.push(new Simulation(next))
    }
  }
}