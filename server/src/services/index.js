const boards = require('./boards/boards.service.js');
const users = require('./users/users.service.js');

module.exports = function (app) {
  app.configure(boards);
  app.configure(users);
};
