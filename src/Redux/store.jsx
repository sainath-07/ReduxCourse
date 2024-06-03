import { legacy_createStore} from 'redux'
import { reducerBookFunction } from './Redux-Classes-May27/Redux/reducer'

export const storeRedux=legacy_createStore(reducerBookFunction)