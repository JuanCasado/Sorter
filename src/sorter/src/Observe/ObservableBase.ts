
import Observable from './Observable'
import Observer from './Observer'

export default class ObservableBase<T> implements Observable<T> {

  private readonly observers : Observer<T>[] = []
  private unSubscribers : Observer<T>[] = []

  public subscribe (observer : Observer<T>) {
    if(!this.observers.includes(observer))
      this.observers.push(observer)
  }

  public unsubscribe (observer : Observer<T>) {
    this.unSubscribers.push(observer)
  }

  public alert (event : T) {
    for (let unSubscriber of this.unSubscribers) {
      this.observers.splice(this.observers.indexOf(unSubscriber), 1)
    }
    this.unSubscribers = []
    for (let observer of this.observers) {
      observer.notify(event)
    }
  }



}