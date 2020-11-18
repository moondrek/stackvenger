const Sequelize = require('sequelize')
const db = require('../db')

const Member = db.define('member', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  isCaptain: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Member
