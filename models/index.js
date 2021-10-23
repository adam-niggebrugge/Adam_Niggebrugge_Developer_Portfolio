//Connection between tables
// const User = require('./User');
const CodeProject = require('./CodeProject');
const Comment = require('./Comment');


// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
// });


// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
// });


module.exports = { CodeProject, Comment };