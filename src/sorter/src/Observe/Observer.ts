
export default interface Observer <T> {
  notify (observable : T) : void
}