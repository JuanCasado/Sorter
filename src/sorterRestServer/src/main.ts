

import Express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import SingleVisitor from '../../sorter/src/Simulate/Visit/SingleVisitor'
import Simulation from '../../sorter/src/Simulate/Simulation'
import RestExecutor from './RestExecutor'
import RestObserver from './RestObserver'
import { v4 } from 'uuid'

const app = Express()
const observers = new Map<string, RestObserver>()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.post('/*', async (req, res) => {
  if (req.body !== undefined && req.body.id !== undefined && observers.has(req.body.id)){
    res.send(await observers.get(req.body.id).getLast())
  } else {
    const restObserver = new RestObserver()
    const key = v4()
    observers.set(key, restObserver)
    const visitor = new SingleVisitor()
    const executor = new RestExecutor(restObserver)
    visitor.simulate(req.body as Simulation, executor)
    res.send(key)
  }
})

app.listen(8081, () => {console.log('Ready!')})
