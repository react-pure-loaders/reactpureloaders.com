import React from 'react';
import { shallow } from 'enzyme';

import Logo from '../components/Logo';

describe('Logo', () => {
  it('should render correctly', () => {
    const mounted = shallow(<Logo image="" />);
    const result = mounted.contains(
      <div className="header-home menu logo">
        <img src="" alt="Logo" height="35px" width="35px" />
        <p className="header-home menu logo title">
          <span id="span-title-1">React Pure</span>
          <span id="span-title-2">Loaders</span>
        </p>
      </div>
    );
    expect(result).toBeTruthy();
  });
});
