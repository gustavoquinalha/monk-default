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
function list(params) {
  const query = {
    page: params.page,
    search: params.search,
    orderBy: 'created_at',
    sortedBy: 'desc',
  }
//
//  const search = Object.keys(query)
//    .reduce((a, k) => a.concat(`${k}:${encodeURIComponent(query[k])}`), [])
//    .join(';')


  return axios.get(`account/${store.getters.account.id}`, {
    params: query
  })
    .then(data => {
      return data;
    })
}

function get(id) {
  return axios.get(`account/${store.getters.account.id}`)
    .then(data => {
      return data;
    })
}

function add(account) {
  return axios.post(`account`, account)
    .then(data => {
      return data;
    }).catch(function (error) {
      return error;
    });

}

function update(account) {
  return axios.put(`account/${store.getters.account.id}`, account)
    .then(data => {
      return data;
    }).catch(function (error) {
      return error;
    });
}

function del(patient, muliple) {
  var patient_id = patient.id;
  if (muliple) {
    patient_id = _.map(patient, 'id').join(',');
  }
  return axios.delete(`account/${store.getters.account.id}/account/${patient_id}`).then(data => {
    return data;
  })
}

export default {
  list,
  get,
  add,
  update,
  del
}
