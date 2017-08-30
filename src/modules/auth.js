export const ACCOUNT   = 'auth/ACCOUNT';
export const SIGN_IN   = 'auth/SIGN_IN';
export const SIGN_OUT  = 'auth/SIGN_OUT';
export const SET_TOKEN = 'auth/SET_TOKEN';

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  token: JSON.parse(localStorage.getItem('token')),
  // user: JSON.parse(localStorage.getItem('user')),
  user: {

      name: 'Valentina',
      lastname: 'Albuquerque',
      foto: ''

  },
  account: JSON.parse(localStorage.getItem('account')),
};

const mutations = {
  [SET_TOKEN](state, token) {
    state.isLoggedIn = !!token;
    state.token      = token;
  },
  [SIGN_IN](state, user) {
    state.user = user;
  },
  [ACCOUNT](state, account) {
    state.account = account;
  },
  [SIGN_OUT](state) {
    state.isLoggedIn = false;
    state.token      = false;
    state.user       = false;
    state.account    = false;
  }
}

const actions = {
  addUser(context, user) {
    localStorage.setItem('user', JSON.stringify(user));
    context.commit(SIGN_IN, user);
  },
  addToken(context, token) {
    localStorage.setItem('token', JSON.stringify(token));
    context.commit(SET_TOKEN, token);
  },
  addAccount(context, account) {
    localStorage.setItem('account', JSON.stringify(account));
    context.commit(ACCOUNT, account);
  },
};

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  token: state => state.token,
  user: state => state.user,
  account: state => state.account,
};

export default {
  state,
  getters,
  actions,
  mutations
}
