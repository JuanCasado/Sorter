

import Creatable from '../Create/Creatable'
import Viewable from '../View/Viewable'
import Sortable from '../Sort/Sortable'

import Observable from '../Observe/Observable'
import Command from '../Command/Command'

export default interface ElementHolder extends Creatable, Viewable, Sortable, Observable<Command> {}