import { useRef } from 'react';
import { fontSizes, fontWeights, fontColors, borderColors, backgroundColors } from '../common';
import Picker from './Picker';

export default {
    component: Picker,
    title: 'Picker',
    argTypes: {
        disabled: { control: 'boolean' },
        type: { control: 'text', table: { disable: true } },
        borderColor: { control: 'select', options: borderColors },
        backgroundColors: { control: 'select', options: backgroundColors },
        fontSize: { control: 'select', options: fontSizes },
        fontWeight: { control: 'select', options: fontWeights },
        fontColor: { control: 'select', options: fontColors },
        onFocus: { table: { disable: true } }
    },
};

const Template = (args) => {
    return (
        <Picker {...args} />
    );
};

export const Default = Template.bind({});
Default.args = {
    disabled: false,
    type: 'date',
    backgroundColors: 'bg-white',
    borderColor: 'border-gray-300',
    fontSize: 'text-base',
    fontWeight: 'font-normal',
    fontColor: 'text-black',
};

export const TimePicker = Template.bind({});
TimePicker.args = {
    ...Default.args,
    type: 'time',
};

export const DateTimePicker = Template.bind({});
DateTimePicker.args = {
    ...Default.args,
    type: 'datetime-local',
};

export const DateRange = (args) => {
    const startRef = useRef();
    const endRef = useRef();

    const onFocus = (e) => {
        console.log( startRef);
        startRef.current.focus();
        endRef.current.focus();
    };

    return (
        <div>
            <Picker id='start' {...args} onFocus={onFocus}/>
            -
            <Picker id='end' {...args} onFocus={onFocus}/>
        </div>
    );
};
DateRange.args = {
    inputRef:null,
    ...Default.args,
};