import { useState } from 'react';
import { fontSizes, fontWeights, fontColors, borderColors, backgroundColors } from '../common';
import DropDown from './DropDown';

const ringColors = [
    'ring-gray-500',
    'ring-pink-500',
    'ring-sky-500',
];

export default {
    component: DropDown,
    title: 'DropDown',
    argTypes: {
        disabled: { control: 'boolean' },
        input: { control: 'object', table: { disable: true }  },
        borderColor: { control: 'select', options: borderColors },
        borderFocusColor: { control: 'select', options: ringColors },
        backgroundColors: { control: 'select', options: backgroundColors },
        fontSize: { control: 'select', options: fontSizes },
        fontWeight: { control: 'select', options: fontWeights },
        fontColor: { control: 'select', options: fontColors },
    },
};

const Template = (args) => {
    return (
        <DropDown {...args}>
            {args.input?.map((input, key) => (
                <option value={input} key={key}>{input}</option>
            ))}
        </DropDown>
    );
};

export const Default = Template.bind({});
Default.args = {
    disabled: false,
    backgroundColors: 'bg-white',
    borderColor: 'border-gray-300',
    borderFocusColor: 'ring-sky-500',
    fontSize: 'text-base',
    fontWeight: 'font-normal',
    fontColor: 'text-black',
    input: ['front', 'backend', 'fullstack'],
};
Default.parameters = {
    controls: { exclude: ['underline', 'onChange'] },
};

export const SelectValue = (args) => {
    const [Selected, setSelected] = useState("");

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    return (
        <div className='inline-grid grid-cols-1 gap-4'>
            <DropDown {...args} onChange={handleSelect} >
                {args.input?.map((input, key) => (
                    <option value={input} key={key}>{input}</option>
                ))}
            </DropDown>
            Select : {Selected}
        </div>
    );
};

SelectValue.args = {
    ...Default.args,
};
SelectValue.parameters = {
    controls: { exclude: ['underline', 'onChange'] },
}


export const Underline = Template.bind({});
Underline.args = {
    underline: true,
    ...Default.args,
};
Underline.parameters = {
    controls: { exclude: ['onChange'] },
};
