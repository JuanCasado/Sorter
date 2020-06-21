
import Observer from './Observer'

export default interface Observable <T> {
  subscribe (observer : Observer<T>) : void
  unsubscribe (observer : Observer<T>) : void
  alert (event : T) : void
}