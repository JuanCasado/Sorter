
export default class Delayable {

  private static delay = 1

  public static setDelay(delay : number) {
    Delayable.delay = delay
  }

  public static getDelay() {
    return Delayable.delay
  }

  public static sleep() {
    return new Promise<void>(resolve => setTimeout(resolve, Delayable.delay))
  }

}