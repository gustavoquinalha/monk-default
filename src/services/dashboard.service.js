import axios from '../plugins/http'
import store from '@/store'

function get() {

  return axios.get(`dashboard/${store.getters.account.id}`).then(data => {
    return data;
  }).catch(function (error) {
    return error;
  });

}

export default {
  get
}
