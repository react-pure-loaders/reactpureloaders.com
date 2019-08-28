import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import {
  BallBeat,
  BallClipRotate,
  BallClipRotateMultiple,
  BallClipRotatePulse,
  BallGridBeat,
  BallGridPulse,
  BallPulse,
  BallPulseRise,
  BallPulseRound,
  BallPulseSync,
  BallRotate,
  BallScale,
  BallScaleMultiple,
  BallScaleRandom,
  BallScaleRipple,
  BallScaleRippleMultiple,
  BallSpinFadeLoader,
  BallSpinLoader,
  BallTrianglePath,
  BallZigZag,
  BallZigZagDeflect
} from 'react-pure-loaders';

import createStories from './createStories';

const animationsStories = [
    {
        name: 'Beat',
        component: <BallBeat />,
    },
    {
        name: 'Clip Rotate',
        component: <BallClipRotate />,
    },
    {
        name: 'Clip Rotate Multiple',
        component: <BallClipRotateMultiple />,
    },
    {
        name: 'Clip Rotate Pulse',
        component: <BallClipRotatePulse />,
    },
    {
        name: 'Grid Beat',
        component: <BallGridBeat />,
    },
    {
        name: 'Grid Pulse',
        component: <BallGridPulse />,
    },
    {
        name: 'Pulse',
        component: <BallPulse />,
    },
    {
        name: 'Pulse Rise',
        component: <BallPulseRise />,
    },
    {
        name: 'Pulse Round',
        component: <BallPulseRound />,
    },
    {
        name: 'Pulse Sync',
        component: <BallPulseSync />,
    },
    {
        name: 'Rotate',
        component: <BallRotate />,
    },
    {
        name: 'Scale',
        component: <BallScale />,
    },
    {
        name: 'Scale Multiple',
        component: <BallScaleMultiple />,
    },
    {
        name: 'Scale Random',
        component: <BallScaleRandom />,
    },
    {
        name: 'Scale Ripple',
        component: <BallScaleRipple />,
    },
    {
        name: 'Scale Ripple Multiple',
        component: <BallScaleRippleMultiple />,
    },
    {
        name: 'Spin Fade Loader',
        component: <BallSpinFadeLoader />,
    },
    {
        name: 'Spin Loader',
        component: <BallSpinLoader />,
    },
    {
        name: 'Triangle Path',
        component: <BallTrianglePath />,
    },
    {
        name: 'Zig Zag',
        component: <BallZigZag />,
    },
    {
        name: 'Zig Zag Deflect',
        component: <BallZigZagDeflect />,
    },
];

const stories = storiesOf('Ball Loaders', module);

stories.addDecorator(withKnobs);

createStories(animationsStories, stories);
