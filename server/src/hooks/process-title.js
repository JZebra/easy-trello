// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {

    if(!context.data.text) {
      throw new Error('A title is required');
    }

    // const user = context.params.user;
    // truncate title to first 120 characters
    const text = context.data.text.substring(0, 120);

    // overwriting the original context is a feathers best practice?
    context.data = {
      text,
      // userId: user._id,
      createdAt: new Date().getTime(),
    };

    return context;
  };
};
