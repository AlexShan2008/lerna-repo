import { ObjectHelpers } from '../src/object-helpers';

describe('object-helpers', () => {
  it("getKeys: { a: 1, b: '2' } toStrictEqual ['a', 'b']", () => {
    expect(ObjectHelpers.getKeys({ a: 1, b: '2' })).toStrictEqual(['a', 'b']);
  });
});
