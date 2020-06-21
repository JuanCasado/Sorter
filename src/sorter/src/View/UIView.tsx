
import React, { Component } from "react"
import Sketch from 'react-p5'
import Window from './Window'
import CommandColorize from "./CommandColorize"

export interface P5 {
  [key: string]: any
}
 
export default abstract class UIView extends Component {

  private needsUpdate : boolean = false
  private width : number = 0
  private height : number = 0
  private canvasParentRef : Element | undefined = undefined
  private canvas : Element | undefined = undefined
  private lastUpdate = Date.now().valueOf()
  protected data = Window.getInstance().getViewing()
  protected lasCommand = Window.getInstance().getLastCommand()
  protected commandColorize = new CommandColorize()
 
  public setup = (p5 : P5, canvasParentRef : Element) => {
    this.canvasParentRef = canvasParentRef
    this.updateWindowDimensions()
    if (this.canvasParentRef)
      this.canvas = p5.createCanvas(this.width, this.height).parent(this.canvasParentRef)
    this.lastUpdate = Date.now().valueOf()
    p5.frameRate(20)
    this.checkData()
    this.init(p5)
  }

  public componentDidMount() {
    this.checkData()
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
    if (this.canvas !== undefined){
      this.canvas.remove()
    }
  }
  
  private updateWindowDimensions = () => {
    if (this.canvasParentRef) {
      this.needsUpdate = true
      this.height = this.canvasParentRef!.parentElement!.clientHeight!
      this.width = this.canvasParentRef!.parentElement!.clientWidth!
    }
  }

  private checkData = () => {
    this.data = Window.getInstance().getViewing()
    return this.data !== undefined
  }

  public draw = (p5 : P5) => {
    if (this.needsUpdate) {
      if (this.canvasParentRef)
        p5.createCanvas(this.width, this.height).parent(this.canvasParentRef)
      this.needsUpdate = false
    }
    const now = Date.now().valueOf()
    const elapsed = now - this.lastUpdate
    if (this.checkData())
      this.update(p5, elapsed)
    p5.textSize(32)
    p5.fill(0, 0, 255)
    p5.noStroke()
    p5.text(p5.frameRate().toFixed(2), 20,40)
    this.lastUpdate = now
  }
 
  public render() {
    return <Sketch setup={this.setup} draw={this.draw}/>
  }

  public getWidth () {
    return this.width
  }
  
  public getHeight () {
    return this.height
  }

  protected abstract init   (p5 : P5) : void;
  protected abstract update (p5 : P5, elapsed : number) : void;

  protected colorCommand () {
    return this.commandColorize.colorCommand(Window.getInstance().getLastCommand())
  }
}