import { legacy_createStore} from 'redux'
import { singleReducer } from './Redux-class-May28/Redux/combinereducer'
import { composeWithDevTools } from 'redux-devtools-extension';


export const storeRedux=legacy_createStore(
    singleReducer,
    composeWithDevTools()
)