import { createStore } from 'redux'

import cgReducer from 'reducers/cg-reducer'

const store = createStore(cgReducer)

export default store
