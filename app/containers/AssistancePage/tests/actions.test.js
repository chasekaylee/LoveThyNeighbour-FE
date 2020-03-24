import { changeLocation } from '../actions';
import { CHANGE_LOCATION } from '../constants';

describe('AssistancePage actions', () => {
  describe('changeLocation Action', () => {
    it('has a type of CHANGE_LOCATION', () => {
      const locationFixture = 'Los Angeles, CA';
      const expected = {
        type: CHANGE_LOCATION,
        location: locationFixture,
      };
      expect(changeLocation(locationFixture)).toEqual(expected);
    });
  });
});
