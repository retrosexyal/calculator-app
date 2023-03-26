import { actionType } from '../actions/inputValueAction';

const initialState = {
  value: '',
};

// eslint-disable-next-line default-param-last
export const inputValueReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionType.SET_VALUE:
      return {
        ...state,
        value: payload,
      };

    default:
      return state;
  }
};
