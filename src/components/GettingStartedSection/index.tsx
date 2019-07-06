import React from 'react';

import Markdown from 'markdown-to-jsx';
import reactElementToJSXString from 'react-element-to-jsx-string';

import code from '../../utils/code';
import BallBeat from '../../utils/FakeLoader';

const GettingStarted = () => (
  <>
    <Markdown children={code} />
    <p className="code-snippet">{reactElementToJSXString(<BallBeat />)}</p>
    <p>
      As no props are passed, the component will use the default values for the
      color and loading state.If you want to personalize,use a string for the
      color and a boolean for loading.
    </p>
    <p className="code-snippet">
      {reactElementToJSXString(<BallBeat color={'#123abc'} loading />)}
    </p>
  </>
);

export default GettingStarted;
