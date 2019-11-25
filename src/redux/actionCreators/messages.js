import { domain, jsonHeaders, handleJsonResponse } from './constants';
import { GETMESSAGES } from '../actionTypes';

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
