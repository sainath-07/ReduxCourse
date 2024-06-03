import { legacy_createStore} from 'redux'
import { singleReducer } from './Redux-class-May28/Redux/combinereducer'

export const storeRedux=legacy_createStore(singleReducer)