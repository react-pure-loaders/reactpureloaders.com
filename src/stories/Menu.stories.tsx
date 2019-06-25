import React from 'react';

import { storiesOf } from '@storybook/react';

import MenuItem from '../components/MenuItem';
import Menu from '../components/Menu';

const menuStories = storiesOf('Menu', module);

menuStories
  .add('Menu Item', () => <MenuItem name="Menu 1" />)
  .add('Menu', () => {
    const items = ['Home', 'Page 1', 'Page 2', 'Page 3'];
    return <Menu items={items} />;
  });
