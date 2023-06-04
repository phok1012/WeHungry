const axios = require('axios');
const basepath = 'http://localhost:1234'

module.exports = {
  searchFor: (input, page=0) => {
    return axios({
      method: 'get',
      url: '/receipes',
      baseURL: basepath,
      params:{
        term: input,
        page: page
      }
    })
  },

  getInfoFor: (id) => {
    return axios({
      method: 'get',
      url: '/receipes/info',
      baseURL: basepath,
      params:{
        id: id
      }
    })
  }
}