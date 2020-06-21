
import UIView, { P5 } from './UIView'
 
export default class ListView extends UIView {

  init () {}
  
  update (p5 : P5) {
    if (this.data){
      const {colorize, extraColor, color} = super.colorCommand ()
      const width = this.getWidth() / this.data!.size()
      const heightStep = this.getHeight() / this.data!.size()
      p5.background('black')
      p5.fill('white')
      p5.noStroke()
      this.data!.forEach((value, index) => {
        if (colorize && extraColor.includes(index))
          p5.fill(color)
        p5.rect(index*width, value*heightStep, width, this.getHeight())
        p5.fill('white')
      })
    }
  }
}