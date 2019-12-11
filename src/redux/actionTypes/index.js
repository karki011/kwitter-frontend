const createActionTypes = actionName => {
  const ACTIONNAME = actionName.toUpperCase();
  return {
    START: ACTIONNAME + ".START",
    SUCCESS: ACTIONNAME + ".SUCCESS",
    FAIL: ACTIONNAME + ".FAIL"
  };
};

export const LOGIN = createActionTypes('LOGIN');
export const LOGOUT = createActionTypes('LOGOUT');
export const GETUSER = createActionTypes('GETUSER');
export const GETUSERLIST = createActionTypes('GETUSERLIST');
export const POSTUSER = createActionTypes('POSTUSER');
export const DELETEUSER = createActionTypes('DELETEUSER');
export const GETMESSAGES = createActionTypes('GETMESSAGES');
export const POSTMESSAGE = createActionTypes('POSTMESSAGE');
export const DELETEMESSAGE = createActionTypes('DELETEMESSAGE');
export const POSTLIKE = createActionTypes('POSTLIKE');
export const PUTUSERPICTURE = createActionTypes("PUTUSERPICTURE");
