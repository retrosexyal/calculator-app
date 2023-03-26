import { combineReducers, createStore } from 'redux';

import { inputValueReducer } from './reducers/inputValueReducer';
import { calculatorReducer } from './reducers/calculatorReducer';
import { themeReducer } from './reducers/themeReducer';

const rootReducer = combineReducers({
  value: inputValueReducer,
  calculator: calculatorReducer,
  theme: themeReducer,
});

export const store = createStore(rootReducer);
