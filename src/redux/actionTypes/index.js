const createActionTypes = (actionName) => {
	const ACTIONNAME = actionName.toUpperCase();
	return {
		START: ACTIONNAME + '.START',
		SUCCESS: ACTIONNAME + '.SUCCESS',
		FAIL: ACTIONNAME + '.FAIL'
	};
};
//AUTH
export const LOGIN = createActionTypes('LOGIN');
export const LOGOUT = createActionTypes('LOGOUT');
//USER
export const GETUSER = createActionTypes('GETUSER');
export const POSTUSER = createActionTypes('POSTUSER');
//MESSAGES
export const GETMESSAGES = createActionTypes('GETMESSAGES');
