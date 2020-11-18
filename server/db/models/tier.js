const Sequelize = require('sequelize')
const db = require('../db')

const Tier = db.define('tier', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pointValue: {
    type: Sequelize.INTEGER
  }
})

module.exports = Tier
