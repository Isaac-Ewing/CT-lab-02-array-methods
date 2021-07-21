const { findArr } = require('../find.js');

describe('find', () => {
  it('finds something', async () => {
    const callback = (x) => x === 3 ? true : false;
    const actual = findArr([1, 2, 3], callback);
    const expected = 2;

    expect(actual).toEqual(expected);
  }); 
});
