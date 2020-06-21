

import React from 'react'
import ReactDOM from 'react-dom'
import Viewable from './Viewable'
import ViewType from './ViewType'
import ListView from './ListView'
import MatrixView from './MatrixView'
import ProgressView from './ProgressView'
import Observer from '../Observe/Observer'
import Command from '../Command/Command'

export default class Window implements Observer<Command> {
  private static readonly self : Window = new Window()
  private static readonly rootElement = document.getElementById('root')
  private static viewable : Viewable | undefined = undefined
  private static lastCommand : Command | undefined = undefined
  private static viewType : ViewType | undefined = undefined
  private constructor(){}

  public static getInstance () : Window {
    return Window.self;
  }

  public display (view : ViewType) {
    Window.viewType = view
    ReactDOM.unmountComponentAtNode(Window.rootElement!)
    switch (view){
      case ViewType.LIST:     ReactDOM.render(<ListView/>, Window.rootElement); break
      case ViewType.MATRIX:   ReactDOM.render(<MatrixView/>, Window.rootElement); break
      case ViewType.PROGRESS: ReactDOM.render(<ProgressView/>, Window.rootElement); break
      case ViewType.NONE: ReactDOM.render(<img src='./Sorter.png' alt='' width='100%' height='100%'/>, Window.rootElement); break
    }
  }

  public view (viewable : Viewable) {
    Window.viewable = viewable
  }

  public getViewing () : Viewable | undefined {
    return Window.viewable
  }

  public getViewType () : ViewType {
    return Window.viewType? Window.viewType : ViewType.NONE
  }

  public getLastCommand () : Command | undefined {
    return Window.lastCommand
  }

  public viewWidth () : number {
    try {
      return Window.rootElement? Window.rootElement!.getElementsByClassName('react-p5')[0].clientWidth : 0
    } catch {
      return Window.rootElement? Window.rootElement!.clientWidth : 0
    }
  }

  public notify (command : Command) {
    Window.lastCommand = command
  }

}
