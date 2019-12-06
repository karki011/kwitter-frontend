import { domain, jsonHeaders, handleJsonResponse } from './constants';
import { GETUSER, DELETEUSER, POSTUSER } from '../actionTypes';
import { push } from 'connected-react-router';
import { logout, login } from './auth';

const url = domain + '/users';

export const getUser = (username) => (dispatch) => {
	dispatch({ type: GETUSER.START });

	return fetch(url + '/' + username, {
		method: 'GET',
		headers: jsonHeaders
	})
		.then(handleJsonResponse)
		.then((result) => {
			return dispatch({
				type: GETUSER.SUCCESS,
				payload: result
			});
		})
		.catch((err) => {
			return Promise.reject(dispatch({ type: GETUSER.FAIL, payload: err }));
		});
};

let username = '';
let token = '';

export const _deleteUser = () => (dispatch, getState) => {
	dispatch({ type: DELETEUSER.START });

	return fetch(url + '/' + username, {
		method: 'DELETE',
		headers: { Authorization: 'Bearer ' + token, ...jsonHeaders }
	})
		.then(handleJsonResponse)
		.then((result) => {
			return dispatch({
				type: DELETEUSER.SUCCESS,
				payload: result
			});
		})
		.then(() => {
			return dispatch(push('/'));
		})
		.catch((err) => {
			return Promise.reject(dispatch({ type: DELETEUSER.FAIL, payload: err }));
		});
};

export const deleteUser = () => (dispatch, getState) => {
	username = getState().auth.login.result.username;
	token = getState().auth.login.result.token;

	return dispatch(logout()).then(() => dispatch(_deleteUser()));
};

const _postUser = (registerData) => (dispatch) => {
	dispatch({ type: POSTUSER.START });

	return fetch(url, {
		method: 'POST',
		headers: jsonHeaders,
		body: JSON.stringify(registerData)
	})
		.then(handleJsonResponse)
		.then((result) => {
			return dispatch({
				type: POSTUSER.SUCCESS,
				payload: result
			});
		})
		.catch((err) => {
			return Promise.reject(dispatch({ type: POSTUSER.FAIL, payload: err }));
		});
};

export const postUser = (registeredData) => (dispatch) => {
	return dispatch(_postUser(registeredData)).then(() =>
		dispatch(
			login({
				username: registeredData.username,
				password: registeredData.password
			})
		)
	);
};
