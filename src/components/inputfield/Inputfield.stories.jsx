import { fontSizes, fontWeights, fontColors, borderColors, backgroundColors } from '../common';
import InputField from './InputField';

const ringColors = [
    'ring-gray-500',
    'ring-pink-500',
    'ring-sky-500',
];

const type = [
    'text',
    'password',
]

export default {
    component: InputField,
    title: 'InputField',
    argTypes: {
        disabled: { control: 'boolean' },
        placeHolder: { control: 'text' },
        borderColor: { control: 'select', options: borderColors },
        borderFocusColor: { control: 'select', options: ringColors },
        backgroundColors: { control: 'select', options: backgroundColors },
        fontSize: { control: 'select', options: fontSizes },
        fontWeight: { control: 'select', options: fontWeights },
        fontColor: { control: 'select', options: fontColors },
        type : {control:'select', options: type},
    },
};

const Template = (args) => {
    return (
        <InputField {...args} />
    );
};

export const Default = Template.bind({});
Default.args = {
    disabled: true,
    placeHolder: '값을 입력하세요.',
    backgroundColors: 'bg-white',
    borderColor: 'border-gray-300',
    borderFocusColor: 'ring-sky-500',
    fontSize: 'text-base',
    fontWeight: 'font-normal',
    fontColor: 'text-black',
};
Default.parameters = {
    controls: { exclude: ['underline', 'type'] },
};

export const Underline = Template.bind({});
Underline.args = {
    underline: true,
    ...Default.args,
};
Underline.parameters = {
    controls: { exclude: ['type'] },
};

export const Password = Template.bind({});
Password.args = {
    type: 'password',
    ...Default.args,
};
Password.parameters = {
    controls: { exclude: ['underline'] },
};
