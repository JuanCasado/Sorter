
import Command from '../Command'
import Saver from './Saver'

export default class BrowserSaver implements Saver {
  save (name : string, file : Command[]) {
    const fs = require('fs')
    fs.writeFile(name, JSON.stringify({commands: file}))
  }
}