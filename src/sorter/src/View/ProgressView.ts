
import UIView, { P5 } from './UIView'
 
export default class ListView extends UIView {

  private max : number = 1
  private lasProgress = 0

  private distance () : number {
    if (this.data) {
      let acc = 0
      this.data!.forEach((value, index) => {
        acc += (value - (index+1)) * (value - (index+1))
      })
      return acc
    }
    return 0
  }

  init () {
    if (this.data) {
      this.max = this.distance()
    }
  }
  
  update (p5 : P5) {
    if (this.data) {
      const progress = this.distance() / this.max
      const width = this.getWidth() * progress
      p5.background('black')
      if (this.lasProgress < progress)
        p5.fill('red')
      else
        p5.fill('white')
      p5.noStroke()
      p5.rect(0, 0, width, this.getHeight())
      this.lasProgress = progress
    }
  }
}