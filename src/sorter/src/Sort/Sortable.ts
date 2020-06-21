
import Comparable from '../Compare/Comparable'

export default interface Sortable {
  switch (position1 : number, position2 : number) : Promise<void>
  get (position : number) : Promise<Comparable>
  size () : number
}