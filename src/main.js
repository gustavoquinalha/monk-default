import './config';

import './element';

import Vue from 'vue'

import App from './App'

import router from './router'

import store from './store'

import {sync} from 'vuex-router-sync'

import pt_BR from '../node_modules/vee-validate/dist/locale/pt_BR'

import VeeValidate, {Validator} from 'vee-validate'

import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, { locale: 'pt-br' }) 

// import '../theme/index.css'

//import eventbus from './plugins/eventbus'

// Vue.use(VueTouch)

Vue.config.productionTip = false


Validator.addLocale(pt_BR)



Vue.use(VeeValidate, {
  locale: 'pt_BR',
  fieldsBagName: 'fieldss',
})

Vue.use(require('vue-moment'));
Vue.use(require('./plugins/currency'));

//Vue.use(eventbus)

sync(store, router)

new Vue({
  router,
  store,
  ...App
}).$mount('app')
