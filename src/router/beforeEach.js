import store from '@/store'
import authService from '@/services/auth.service';

const beforeEach = (to, from, next) => {

  document.title = to.meta.title + ' - Minds Idiomas'

  let toName  = to.name
  let isLogin = store.state.auth.isLoggedIn

  // if (isLogin && (toName === "login" || toName === "cadastro")) {
  //   next({path: '/'})
  // }

  if (to.matched.some(record => record.meta.auth)) {

    // if (isLogin) {
    //   next()
    //
    // } else {
    //   next({name: 'login'})
    // }

  }
  next()

}

export default beforeEach
