
import Command from '../Command'
import Loader from './Loader'
import CommandParser from '../CommandParser'

export default class NodeLoader implements Loader {
  
  public load (name : string) : Promise<Command[]> {
    return new Promise <Command[]> ((resolve, reject)=>{
      const fs = require('fs')
      const commandParser = new CommandParser()
      fs.readFile(name, (err : any, data : any) => {
        if (err) 
          reject ()
        else
          resolve(commandParser.parse(data))
      })
    })
  }

}