import { faBlackboard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import Grid from './Grid';

export default {
  component: Grid,
  title: 'Grid',
};

const Template = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  color : "white",
  "border-thinkness" : 1,
  "border-color" : "black",
  task: {
    id: '1',
    title: 'Test Gird',
    state: 'Grid_Default',
    updatedAt: new Date(2022, 9, 23, 9, 0),
  },
};

export const HeaderColorChange = Template.bind({});
HeaderColorChange.args = {
  ...Default.args,
  color : "lavender",
  "border-thinkness" : 1,
  "border-color" : "black",
  task: {
    state: 'Grid_HeaderColorChange',
  },
};

export const LineControl = Template.bind({});
  LineControl.args = {
    ...Default.args,
    color : "white",
    "border-thinkness" : 3,
    "border-color" : "lavender",
    task: {
      state: 'Grid_LineColorChange',
    },
};