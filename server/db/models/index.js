const User = require('./user')
const Hunt = require('./hunt')
const Tier = require('./tier')
const Task = require('./task')
const Team = require('./team')
const Member = require('./member')
const Participant = require('./participant')
const Submission = require('./submission')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Hunt,
  Tier,
  Task,
  Team,
  Member,
  Participant,
  Submission
}
