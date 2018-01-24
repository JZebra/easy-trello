const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const processTitle = require('../../src/hooks/process-title');

describe('\'process-title\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    // dummy service for testing
    app.use('/dummy', {
      async create(data) {
        return data;
      }
    });

    // add hook to dummy service
    app.service('dummy').hooks({
      before: processTitle()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').create({
      text: 'foo'
    });
    assert.equal(result.text, 'foo');
  });
  it('truncates titles to 120 characters', async () => {
    const tooLong = 'This title is way to long to display This title is way to long to display This title is way to long to display This title is way to long to display';
    const result = await app.service('dummy').create({
      text: tooLong
    });
    assert.equal(result.text, tooLong.substr(0, 120));
  });
});
