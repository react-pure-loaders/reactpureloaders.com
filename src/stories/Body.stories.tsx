import React from 'react'

import { storiesOf } from '@storybook/react';

import Section from '../components/Section';

const BodyStories = storiesOf('Body', module)

BodyStories.add('Section' ,() => <Section title='What it is?' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus at.' />);
