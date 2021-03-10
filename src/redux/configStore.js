import {combineReducers,createStore} from 'redux'
import BaiTapOanTuXiReducer from'./Reducers/BaiTapOanTuXiReducers'
const rootReducer = combineReducers({
    OanTuXiReducer: BaiTapOanTuXiReducer,
})

export const store = createStore(rootReducer);