import Form from './Form';
// import { fontColors, backgroundColors, fontSizes, fontWeights, borderRadiuses } from '../common';
import styled from 'styled-components';
// import { useCallback, useState } from 'react';

export default {
  title: 'Form',
  component: Form,
  argTypes: {},
};

const Template = (args) => <Form {...args} />;

export const Default = Template.bind({});

// const Button = styled.button`
//   border-radius: 5px;
//   height: 30px;
//   color: blue;
//   :hover {
//     background-color: #b1d8f9;
//   }
// `;
