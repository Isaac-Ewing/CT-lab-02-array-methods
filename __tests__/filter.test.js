const { filterArr } = require('../filter.js');

describe('filter', () => {
  it('does filter stuff', async () => {
    const callback = (x) => x === 3 ? true : false;
    const actual = filterArr([1, 2, 3], callback);
    const expected = [3];

    expect(actual).toEqual(expected);
  }); 
});
