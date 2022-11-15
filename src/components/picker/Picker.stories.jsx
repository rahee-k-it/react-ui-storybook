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
        bgColors: { control: 'select', options: backgroundColors },
        fontSize: { control: 'select', options: fontSizes },
        fontWeight: { control: 'select', options: fontWeights },
        fontColor: { control: 'select', options: fontColors },
        onChange: { table: { disable: true } },
        className: { table: { disable: true } },
        refs: { table: { disable: true } },
    },
};

const Template = ({
    bgColors = 'bg-white',
    borderColor = 'border-gray-300',
    fontSize = 'text-base',
    fontWeight = 'font-normal',
    fontColor = 'text-black',
    ...args }) => {

    return (
        <Picker className={`${fontSize} ${fontWeight} ${fontColor} ${bgColors} ${borderColor}`} {...args} />
    );
};

export const Default = Template.bind({});
Default.args = {
    disabled: false,
    type: 'date',
    bgColors: 'bg-white',
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

export const DateRange = ({
    bgColors = 'bg-white',
    borderColor = 'border-gray-300',
    fontSize = 'text-base',
    fontWeight = 'font-normal',
    fontColor = 'text-black',
    ...args }) => {

    const endRef = useRef();

    const handleSelect = (e) => {
        endRef.current.min = e.target.value;
        endRef.current.showPicker();
    };

    return (
        <div>
            <Picker id='start' className={`${fontSize} ${fontWeight} ${fontColor} ${bgColors} ${borderColor}`} {...args} onChange={handleSelect} />
            -
            <Picker refs={endRef} id='end' className={`${fontSize} ${fontWeight} ${fontColor} ${bgColors} ${borderColor}`} {...args} />
        </div>
    );
};

DateRange.args = {
    ...Default.args,
};
