import { domain, jsonHeaders, handleJsonResponse } from './constants';
import { GETMESSAGES, POSTMESSAGE } from '../actionTypes';

const url = domain + '/messages';

export const getMessages = (username) => (dispatch) => {
	dispatch({ type: GETMESSAGES.START });
	const endPointUrl = username ? url + '?username=' + username : url;
	return fetch(endPointUrl, {
		method: 'GET',
		headers: jsonHeaders
	})
		.then(handleJsonResponse)
		.then((result) => {
			return dispatch({
				type: GETMESSAGES.SUCCESS,
				payload: result
			});
		})
		.catch((err) => {
			return Promise.reject(dispatch({ type: GETMESSAGES.FAIL, payload: err }));
		});
};

export const _postMessage = postMessageBody => (dispatch, getState) => {
	dispatch({ 
		type: POSTMESSAGE.START 
	});

	const token = getState().auth.login.result.token;
	
	return fetch(url, {
		method: 'POST',
		headers: { Authorization: "Bearer " + token, ...jsonHeaders },
		body: JSON.stringify(postMessageBody)
	})
		.then(handleJsonResponse)
		.then((result) => {
			return dispatch({
				type: POSTMESSAGE.SUCCESS,
				payload: result
			});
		})
		.catch((err) => {
			return Promise.reject(dispatch({ type: POSTMESSAGE.FAIL, payload: err }));
		});

}

export const postMessage = postMessageBody => (dispatch, getstate) => {
	return dispatch(_postMessage(postMessageBody)).then(() => {
		return dispatch(getMessages());
	});
}