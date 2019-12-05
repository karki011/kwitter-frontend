import { domain, jsonHeaders, handleJsonResponse } from './constants';
import { POSTLIKE } from '../actionTypes';

const url = domain + '/likes';

export const postLike = (messageId) => (dispatch, getState) => {
	dispatch({
		type: POSTLIKE.START
	});

	const token = getState().auth.login.result.token;

	return fetch(url, {
		method: 'POST',
		headers: { Authorization: 'Bearer ' + token, ...jsonHeaders },
		body: JSON.stringify(messageId)
	})
		.then(handleJsonResponse)
		.then((result) => {
			return dispatch({
				type: POSTLIKE.SUCCESS,
				payload: result
			});
		})
		.catch((err) => {
			return Promise.reject(dispatch({ type: POSTLIKE.FAIL, payload: err }));
		});
};
