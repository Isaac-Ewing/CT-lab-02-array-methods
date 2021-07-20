describe('map', () => {
  it('does map stuff', async () => {
    const callback = (x) => x * 2;
    const actual = mapArr([1, 2, 3], callback);
    const expected = [2, 4, 6];

    expect(actual).toEqual(expected);
  }); 
});
