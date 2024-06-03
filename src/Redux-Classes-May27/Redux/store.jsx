import { legacy_createStore} from 'redux'
import { reducerBookFunction } from './reducer'

export const storeRedux=legacy_createStore(reducerBookFunction)