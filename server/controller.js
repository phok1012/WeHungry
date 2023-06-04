const model = require('./model.js');

module.exports = {
  search: async (req, res) => {
    let term = req.query.term
    let offset = req.query.page * 10
    let results = await model.search(term, offset)
    res.status(200).json(results.data.results)
  },

  getInfo: async (req, res) => {
    let id = req.query.id
    let results = await model.getInfo(id)
    res.status(200).json(results.data)
  }
}