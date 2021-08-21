import { ObjectHelpers } from '../src/object-helpers';

describe('object-helpers', () => {
  it('formatMoney: 1000000 with dollors', () => {
    expect(ObjectHelpers.getKeys({ a: 1, b: '2' })).toStrictEqual(['a', 'b']);
  });
});
