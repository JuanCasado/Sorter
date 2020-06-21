
import SimulationBuilder from './SimulationBuilder'
import Simulation from './Simulation'
import SimulationType from './SimulationType'
import SortType from '../Sort/SortType'
import ComparatorType from '../Compare/ComparatorType'
import CreatorType from '../Create/CreatorType'
import ViewType from '../View/ViewType'

export default abstract class SimulationBuilderBase implements SimulationBuilder {

  protected simulation : Simulation = new Simulation({next : [new Simulation({next : []})]})
  protected readingIndex : number[] = [0]

  public abstract readSize () : Promise<void>
  public abstract readType () : Promise<void> 
  public abstract readSave () : Promise<void>
  public abstract readSort () : Promise<void> 
  public abstract readSortDirection () : Promise<void>
  public abstract readCreator () : Promise<void> 
  public abstract readCreatorDirection () : Promise<void>
  public abstract readView () : Promise<void>
  public abstract readNext () : Promise<boolean> 
  public abstract readSimultaneous () : Promise<boolean>

  public isReady () : boolean {
    return this.readingIndex.length > 0
  }

  public getSimulation () : Simulation {
    return this.simulation
  }

  protected currentSimulation (simulation : Simulation = this.simulation) {
    let currentSimulation = simulation
    for (let index of this.readingIndex) {
      currentSimulation = currentSimulation.next[index]
    }
    return currentSimulation
  }

  protected addNext (add : boolean) {
    if (add) {
      this.currentSimulation().next.push(new Simulation({next: []}))
      this.readingIndex.push(0)
    }else {
      this.readingIndex.splice(this.readingIndex.length-1, 1)
    }
  }

  protected getReadingIndex () : number[] {
    return this.readingIndex
  }

  protected addSimultaneous (add : boolean) {
    if (add) {
      const oldIndex = this.readingIndex[this.readingIndex.length-1]
      this.readingIndex.splice(this.readingIndex.length-1, 1)
      this.currentSimulation().next.push(new Simulation({next: []}))
      this.readingIndex.push(oldIndex+1)
    }else {
      this.readingIndex.splice(this.readingIndex.length-1, 1)
    }
  }

  protected validateNumber (posibleNumber : string | null) {
    const number = Number(posibleNumber)
    const valid = !isNaN(number)
    return {
      valid: valid,
      content: number,
    }
  }

  protected validateSimulation (posibleSimulation : string | null) {
    let valid = true
    let simulation = null
    switch (posibleSimulation) {
      case SimulationType.LOCAL_DELAY.toString(): simulation = SimulationType.LOCAL_DELAY; break
      case SimulationType.LOCAL_REAL.toString(): simulation = SimulationType.LOCAL_REAL; break
      case SimulationType.WS_DELAY.toString(): simulation = SimulationType.WS_DELAY; break
      case SimulationType.WS_REAL.toString(): simulation = SimulationType.WS_REAL; break
      case SimulationType.REST_DELAY.toString(): simulation = SimulationType.REST_DELAY; break
      case SimulationType.REST_REAL.toString(): simulation = SimulationType.REST_REAL; break
      default: valid = false; break
    }
    return {
      valid: valid,
      content: simulation,
    }
  }

  protected validateBoolean (posibleBoolean : string | null) {
    let valid = true
    let boolean = null
    switch (posibleBoolean) {
      case 'YES': boolean = true; break
      case 'NO': boolean = false; break
      case 'true': boolean = true; break
      case 'false': boolean = false; break
      default: valid = false; break
    }
    return {
      valid: valid,
      content: boolean,
    }
  }

  protected validateCreator (posibleCreator : string | null) {
    let valid = true
    let creator = null
    switch (posibleCreator) {
      case CreatorType.ORDERED.toString(): creator = CreatorType.ORDERED; break
      case CreatorType.RANDOM.toString(): creator = CreatorType.RANDOM; break
      case CreatorType.SEMI_ORDERED.toString(): creator = CreatorType.SEMI_ORDERED; break
      default: valid = false; break
    }
    return {
      valid: valid,
      content: creator,
    }
  }

  protected validateSort (posibleSort : string | null) {
    let valid = true
    let sort = null
    switch (posibleSort) {
      case SortType.BUBBLE.toString(): sort = SortType.BUBBLE; break
      case SortType.COCKTAIL.toString(): sort = SortType.COCKTAIL; break
      case SortType.GNOME.toString(): sort = SortType.GNOME; break
      case SortType.HEAP.toString(): sort = SortType.HEAP; break
      case SortType.INSERT.toString(): sort = SortType.INSERT; break
      case SortType.MERGE.toString(): sort = SortType.MERGE; break
      case SortType.QUICK.toString(): sort = SortType.QUICK; break  
      case SortType.SELECTION.toString(): sort = SortType.SELECTION; break  
      case SortType.SHELL.toString(): sort = SortType.SHELL; break      
      case SortType.TIM.toString(): sort = SortType.TIM; break      
      default: valid = false; break
    }
    return {
      valid: valid,
      content: sort,
    }
  }

  protected validateDirection (posibleDirection : string | null) {
    let valid = true
    let direction = null
    switch (posibleDirection) {
      case ComparatorType.MAX.toString(): direction = ComparatorType.MAX; break
      case ComparatorType.MIN.toString(): direction = ComparatorType.MIN; break
      default: valid = false; break
    }
    return {
      valid: valid,
      content: direction,
    }
  }

  protected validateView (posibleView : string | null) {
    let valid = true
    let view = null
    switch (posibleView) {
      case ViewType.LIST.toString(): view = ViewType.LIST; break
      case ViewType.MATRIX.toString(): view = ViewType.MATRIX; break
      case ViewType.NONE.toString(): view = ViewType.NONE; break
      case ViewType.PROGRESS.toString(): view = ViewType.PROGRESS; break
      default: valid = false; break
    }
    return {
      valid: valid,
      content: view,
    }
  }

}