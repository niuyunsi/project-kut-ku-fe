import { validateRoomName } from '../lib/validateRoomName';

describe('validateRoomName function', () => {
  it('works with numbers and letters', () => {
    expect(validateRoomName('abcd')).toBe(false);
    expect(validateRoomName('1234')).toBe(false);
    expect(validateRoomName('abcd1234')).toBe(false);
  });
  it('return true with empty room name', () => {
    expect(validateRoomName('')).toBe(true);
  });
  it('return true with room name other than numbers and letters', () => {
    expect(validateRoomName('~!@#$')).toBe(true);
    expect(validateRoomName('abcd1234~!@#$')).toBe(true);
  })
});
