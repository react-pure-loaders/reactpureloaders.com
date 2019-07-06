import React from 'react';
import { shallow } from 'enzyme';

import SocialMedia from '../components/SocialMedia';

describe('Social Media', () => {
  it('should render correctly', () => {
    const mounted = shallow(<SocialMedia path="" desc="" link="" title="" />);
    const result = mounted.contains(
      <div className="social-media">
        <a href="" title="">
          <img src="" alt="" />
        </a>
      </div>
    );
    expect(result).toBeTruthy();
  });
});
