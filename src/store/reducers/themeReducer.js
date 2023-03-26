import { actionType } from '../actions/themeAction';

const initialState = {
  theme: 'Ligth theme',
};

// eslint-disable-next-line default-param-last
export const themeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionType.SET_THEME:
      return {
        ...state,
        theme: payload,
      };

    default:
      return state;
  }
};
