const initialState = {};


export function user(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        info: action.payload
      }
    default:
      return state;
  }
}
