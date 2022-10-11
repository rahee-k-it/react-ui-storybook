import React from 'react';
import Toggle from './Toggle';
import { fontSizes, backgroundColors } from '../common';

export default {
  component: Toggle,
  title: 'Toggle',
  argTypes: {
    id: { control: 'text' },
    leftBgColor: {
      control: { type: 'select' },
      options: backgroundColors,
      description: '왼쪽 배경 색상 조절',
    },

    rightBgColor: {
      control: { type: 'select' },
      options: backgroundColors,
      description: '오른쪽 배경 색상 조절',
    },
    size: {
      control: { type: 'select' },
      options: fontSizes,
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
    onChange: { action: 'changed' },
  },
  decorators: [(Story) => <div style={{ margin: '3em' }}>{Story()}</div>],
};

const Template = (args) => <Toggle {...args}></Toggle>;

export const Default = Template.bind({});
Default.args = {
  id: '',
  leftBgColor: 'bg-gray-300',
  rightBgColor: 'bg-green-500',
  size: 'text-base',
  disabled: false,
  defaultState: false,
};
