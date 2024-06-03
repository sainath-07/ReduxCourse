import { applyMiddleware, legacy_createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import { singleReducerhttp } from './Httpcall/redux/combinereducer';


export const storeRedux=legacy_createStore(
    singleReducerhttp,
    composeWithDevTools(applyMiddleware(thunk))
)