import Vue from 'vue';
import axios from '../plugins/http'
import {SIGN_OUT} from '@/modules/auth/'
import store from '@/store'

/**
 *
 * @param email
 * @param password
 *
 */
function signin({email, password}) {
  return axios.post('login', {email: email, password: password})
    .then(data => {
      return setUserAndToken(data);

    }).catch(function (error) {
      return error;
    });
}

/**
 *
 * @param email
 * @param password
 *
 */
function signup({name, email, password}) {
  return axios.post('register', {name: name, email: email, password: password})
    .then(data => {
      return setUserAndToken(data);
    })
}


/**
 *
 * fechUser user
 *
 */
function setUserAndToken(token) {

  store.dispatch('addToken', token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token.access_token}`

  return axios.get('user').then(data => {
    store.dispatch('addUser', data);
    if (data.accounts.length > 0) {
      store.dispatch('addAccount', data.accounts[0]);
    }
  }).catch(function (error) {
    signout()
  });
}

/**
 *
 * @param token
 *
 */

function setToken(token) {
  store.dispatch('addToken', token);
}

/**
 *
 * @param user
 *
 */

function setUser(token) {
  store.dispatch('addUser', user);
  if (user.accounts.length > 0) {
    store.dispatch('addAccount', user.accounts[0]);
  }
}


/**
 *
 * fechUser user
 *
 */
function fechUser() {
  return axios.get('user')
    .then(data => {
      setUser(data);
      return data;
    }).catch(function (error) {
      return error;
    });
}
/**
 *
 * @param refresh_token
 * Refresh session user
 *
 */
function refresh(refresh_token) {
  return axios.post('refresh', {refresh_token: refresh_token}).then(data => {
    setToken(data);
    return data;
  }).catch(function (error) {
    return error;
  });
}


/**
 * Remove session
 */
function signout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('account');
  store.commit(SIGN_OUT);
  this.$router.push({name: 'login'});
}

/**
 *
 * @returns {boolean}
 */
function isLoggedIn() {
  return !!localStorage.getItem('token');
}

/**
 *
 * @param next
 */
function protectRoute(next) {
  if (isLoggedIn()) {
    next();
  } else {
    next(false);
  }
}

export default {
  signin,
  signup,
  fechUser,
  signout,
  setToken,
  setUser,
  isLoggedIn,
  protectRoute,
  refresh,
}
