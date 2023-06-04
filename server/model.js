const axios = require('axios');
const spoonAPIKey = 'b6fec1c5374b46cfb3466240feeee760'
const basepath = 'https://api.spoonacular.com/recipes'

module.exports = {
  search: (term, offset) => {
    return axios.request({
      method: 'get',
      url: '/complexSearch',
      baseURL: basepath,
      params:{
        query: term,
        offset: offset
      },
      headers: {
        'x-api-key': spoonAPIKey,
      }
    })
  },

  getInfo: (id) => {
    return axios.request({
      method: 'get',
      url: '/informationBulk',
      baseURL: basepath,
      params:{
        ids: id
      },
      headers: {
        'x-api-key': spoonAPIKey,
      }
    })
  }
}