
import UIView, { P5 } from './UIView'
 
export default class ListView extends UIView {

  init () {}
  
  update (p5 : P5) {
    if (this.data) {
      const {colorize, extraColor, color} = super.colorCommand ()
      const width = this.getWidth() / this.data!.size()
      const height = this.getHeight() / this.data!.size()
      const pixelSize = Math.min(Math.max(width, height, 3), 10)
      p5.background('white')
      p5.strokeWeight(pixelSize)
      p5.stroke('black')
      this.data!.forEach((value, index) => {
        if (colorize && extraColor.includes(index))
          p5.stroke(color)
        p5.point (index*width, value*height)
        p5.stroke('black')
      })
    }
  }
}