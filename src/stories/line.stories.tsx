import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import {
  LineScale,
  LineScaleParty,
  LineScalePulseOut,
  LineScalePulseOutRapid,
  LineScaleRandom,
  LineSpinFadeLoader,
} from 'react-pure-loaders';

import createStories from './createStories';

const animationsForStories = [
    {
        name: 'Scale',
        component: <LineScale />,
    },
    {
        name: 'Scale Party',
        component: <LineScaleParty />,
    },
    {
        name: 'Scale Pulse Out',
        component: <LineScalePulseOut />,
    },
    {
        name: 'Scale Pulse Out Rapid',
        component: <LineScalePulseOutRapid />,
    },
    {
        name: 'Scale Random',
        component: <LineScaleRandom />,
    },
    {
        name: 'Spin Fade Loader',
        component: <LineSpinFadeLoader />,
    },
];

const stories = storiesOf('Line Loaders', module);

stories.addDecorator(withKnobs);

createStories(animationsForStories, stories);
