const Sequelize = require('sequelize')
const db = require('../db')

const Submission = db.define('submission', {
  mediaUrl: {
    type: Sequelize.TEXT
  }
})

module.exports = Submission
