export const actionType = {
  SET_CALCULATOR: 'SET_CALCULATOR',
  SET_HISTORY: 'SET_HISTORY',
};

export const calculatorAction = (payload) => ({ type: actionType.SET_CALCULATOR, payload });
export const historyAction = (payload) => ({ type: actionType.SET_HISTORY, payload });
