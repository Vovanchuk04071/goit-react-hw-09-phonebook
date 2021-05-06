import axios from 'axios';
import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  getCurrentUserSuccess,
  changeLoading,
  fetchError,
} from './auth-action';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = credentials => async dispatch => {
  dispatch(changeLoading(true));
  try {
    const { data } = await axios.post('/users/signup', credentials);

    token.set(data.token);

    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  } finally {
    dispatch(changeLoading(false));
  }
};

export const login = credentials => async dispatch => {
  dispatch(changeLoading(true));
  try {
    const { data } = await axios.post('/users/login', credentials);

    token.set(data.token);

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  } finally {
    dispatch(changeLoading(false));
  }
};

export const logout = () => async dispatch => {
  dispatch(changeLoading(true));

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(fetchError(error.message));
  } finally {
    dispatch(changeLoading(false));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  dispatch(changeLoading(true));

  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  try {
    const { data } = await axios.get('/users/current');
    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  } finally {
    dispatch(changeLoading(false));
  }
};
