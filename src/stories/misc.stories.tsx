import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import {
  CubeTransition,
  Pacman,
  SemiCircleSpin,
  SquareSpin,
  TriangleSkewSpin,
} from 'react-pure-loaders';

import createStories from './createStories';

const animationsForStories = [
    {
        name: 'Cube Transition',
        component: <CubeTransition />,
    },
    {
        name: 'Pacman',
        component: <Pacman />,
    },
    {
        name: 'Semi Circle Spin',
        component: <SemiCircleSpin />,
    },
    {
        name: 'Square Spin',
        component: <SquareSpin />,
    },
    {
        name: 'Triangle Skew Spin',
        component: <TriangleSkewSpin />,
    },
];

const stories = storiesOf('Misc Loaders', module);

stories.addDecorator(withKnobs);

createStories(animationsForStories, stories);
