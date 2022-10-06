import React from 'react';
import Toggle from './Toggle';
//import { backgroundColors, borderRadiuses, fontColors, fontSizes, fontWeights } from '../common';

export default {
  component: Toggle,
  title: 'Toggle',
  argTypes: {
    leftBgColor: {
      control: { type: 'color' },
      description: '왼쪽 배경 색상 조절',
    },
    rightBgColor: {
      control: { type: 'color' },
      description: '오른쪽 배경 색상 조절',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'normal', 'large'],
      description: '토글 버튼 크기 조절',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 제어',
    },
    defaultState: {
      control: 'boolean',
      description: '토글 버튼 초기 상태',
    },
  },
  decorators: [(Story) => <div style={{ margin: '3em' }}>{Story()}</div>],
};

const Template = (args) => <Toggle {...args}></Toggle>;

export const Default = Template.bind({});
Default.args = {
  defaultState: false,
};
