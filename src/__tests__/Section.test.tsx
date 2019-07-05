import React from 'react';
import { shallow } from 'enzyme';

import Section from '../components/Section';

describe('Section', () => {
  it('should render correctly given a title', () => {
    const mounted = shallow(<Section title="What" />);
    const result = mounted.contains(
      <div className="section">
        <h2 className="section-title">What</h2>
      </div>
    );
    expect(result).toBeTruthy();
  });
  it('should render a title and a description', () => {
    const mounted = shallow(<Section title="Greeting" description="Hello" />);
    const result = mounted.contains(
      <div className="section">
        <h2 className="section-title">Greeting</h2>
        <p className="section-description">Hello</p>
      </div>
    );
    expect(result).toBeTruthy();
  });
  it('should render a children', () => {
    const mounted = shallow(
      <Section title="Greeting">
        <h3>Hello</h3>
      </Section>
    );
    const result = mounted.contains(
      <div className="section">
        <h2 className="section-title">Greeting</h2>
        <div className="section-home-children">
          <h3>Hello</h3>
        </div>
      </div>
    );
    expect(result).toBeTruthy();
  });
});
