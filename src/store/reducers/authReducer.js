const initState = {
   authError: null
}

const authReducer = (state = initState, action) => {
   switch (action.type) {
      case 'LOGIN_SUCCESS':
         console.log('login success');
         return {
            ...state,
            authError: null
         };
      case 'LOGIN_ERROR':
         console.log('login error')
         return {
            ...state,
            authError: 'LOGIN FAILED'
         };
      case 'SIGNOUT_SUCCESS':
         console.log('logout success');
         return state;
      case 'SIGNOUT_FAILURE':
         console.log('logout failure');
         return state;
      case 'SIGNUP_SUCCESS':
         console.log('signup success')
         return {
            ...state,
            authError: null
         };
      case 'SIGNUP_FAILURE':
         console.log('signup error');
         return {
            ...state,
            authError: action.error.message
         }
      default:
         return state;
   }
}

export default authReducer