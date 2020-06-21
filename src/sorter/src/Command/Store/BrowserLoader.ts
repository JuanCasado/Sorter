
import Command from '../Command'
import Loader from './Loader'
import CommandParser from '../CommandParser'

export default class BroserLoader implements Loader {
  
  public load () : Promise<Command[]> {
    return new Promise <Command[]> (async (resolve, reject) => {
      const commandParser = new CommandParser()
      const root = document.getElementById('root')
      const cancel = (e: any) => {e.stopPropagation();e.preventDefault();}
      root!.addEventListener('dragenter', cancel, false);
      root!.addEventListener('dragover', cancel, false);
      root!.addEventListener('drop', async (event : any) => {
        cancel(event)
        if (event!.dataTransfer.files!.length > 0) {
          const fr = new FileReader();
          fr.onload = (event : any) => {
            resolve(commandParser.parse(event.target.result))
          }
          fr.readAsText(event!.dataTransfer.files![0])
        } else {
          reject()
        }
      }, false)
    })
  }

}