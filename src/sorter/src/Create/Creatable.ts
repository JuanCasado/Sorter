
export default interface Creatable {
  getAt (position : number) : number
  setAt (position : number, value : number) : Promise<void>
  size () : number
}