const boards = require('./boards/boards.service.js');
module.exports = function (app) {
  app.configure(boards);
};
