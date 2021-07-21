const { reduceArr } = require('../reduce.js');

describe('reduce', () => {
  it('reduces something', async () => {
    const callback = (accumulator, item) => accumulator += item;
    const actual = reduceArr([1, 2, 3], callback);
    const expected = 6;

    expect(actual).toEqual(expected);
  }); 
});
