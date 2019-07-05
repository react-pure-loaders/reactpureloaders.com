import * as React from 'react';
import { shallow } from 'enzyme';

import MenuItem from '../components/MenuItem';

describe('Menu Item', () => {
  it('should render correctly', () => {
    const result = shallow(<MenuItem name="Home" />).contains(
      <p className="menu-item">Home</p>
    );
    expect(result).toBeTruthy();
  });
});
