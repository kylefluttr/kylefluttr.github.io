export default (state = {}, action) => {
    switch(action.type) {
      case 'ACTION_LOGIN':
        if(action.payload)
          return {
            ...state,
            loggedIn: true,
            user: action.payload.user,
            token: action.payload.token
          };
        else {
          return {
            ...state,
            loggedIn: false
          }
        }
      case 'ACTION_LOGOUT':
        return {
          ...state,
          loggedIn: false,
          user: undefined
        }
      default:
        return state;
    }
  }
