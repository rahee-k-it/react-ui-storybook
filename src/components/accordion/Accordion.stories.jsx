import { Accordion } from './Accordion';
import { fontColors, backgroundColors, fontSizes, fontWeights, borderRadiuses } from '../common';

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {
    border: { control: 'boolean' },
    borderRadiusSize: { control: 'select', options: borderRadiuses },

    summary: { control: 'text' },
    summaryColor: { control: 'select', options: fontColors },
    summaryBgColor: { control: 'select', options: backgroundColors },
    summaryFontSize: { control: 'select', options: fontSizes },
    summaryFontWeights: { control: 'select', options: fontWeights },

    details: { control: 'object' },
    detailsColor: { control: 'select', options: fontColors },
    detailsBgColor: { control: 'select', options: backgroundColors },
    detailsFontSize: { control: 'select', options: fontSizes },
    detailsFontWeights: { control: 'select', options: fontWeights },
    detailsClickable: { control: 'boolean' },
    scalable: { control: 'boolean' },
  },
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
export const MultipleDetails = Template.bind({});
export const WithHoverEffect = Template.bind({});

MultipleDetails.args = {
  details: ['detail 1', 'detail 2', 'detail 3', 'detail 4', 'detail 5'],
};

WithHoverEffect.args = {
  details: ['detail 1', 'detail 2', 'detail 3', 'detail 4', 'detail 5'],
  detailsClickable: true,
  scalable: true,
};