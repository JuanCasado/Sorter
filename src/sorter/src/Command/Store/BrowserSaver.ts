
import Command from '../Command'
import Saver from './Saver'

export default class BrowserSaver implements Saver {
  save (name : string, file : Command[]) {
    const saver = document.createElement('a')
    const rawFile = new Blob([JSON.stringify({commands: file})], {type: 'text/plain'})
    console.log(JSON.stringify({commands: file}))
    saver.href = URL.createObjectURL(rawFile)
    saver.download = name
    saver.click()
  }
}