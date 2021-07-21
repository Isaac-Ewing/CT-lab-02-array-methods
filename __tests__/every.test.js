const { arrEvery } = require('../every.js');

describe('find', () => {
  it('finds something', async () => {
    const callback = (x) => (Number.isInteger(x)) ? true : false;
    const actual = arrEvery([1, 2, 3], callback);
    const expected = true;

    expect(actual).toEqual(expected);
  }); 
});
