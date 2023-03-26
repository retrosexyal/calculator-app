import { actionType } from '../actions/calculatorAction';

const initialState = {
  calculator: null,
  history: [],
};

// eslint-disable-next-line default-param-last
export const calculatorReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionType.SET_CALCULATOR:
      return {
        ...state,
        calculator: payload,
      };
    case actionType.SET_HISTORY:
      return {
        ...state,
        history: payload,
      };

    default:
      return state;
  }
};
