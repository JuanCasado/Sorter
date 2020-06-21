
export default interface Viewable {
  size() : number
  forEach (callback: (value: number, index: number) => void) : void
}