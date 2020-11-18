const Sequelize = require('sequelize')
const db = require('../db')

const Hunt = db.define('hunt', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE
  },
  active: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Hunt
