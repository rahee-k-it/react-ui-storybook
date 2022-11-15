import { useState } from 'react';
import { backgroundColors, fontColors, fontSizes, fontWeights } from '../common';
import Tooltip from './Tooltip';
import Button from '../button/Button';

const position = [
    'object-bottom',
    'object-left',
    'object-right',
    'object-top'
];

export default {
    component: Tooltip,
    title: 'Tooltip',
    argTypes: {
        message: { control: 'text' },
        active: { table: { disable: true } },
        alwaysDisplay: { table: { disable: true } },
        className: { table: { disable: true } },
        tooltipColor: { control: 'select', options: backgroundColors },
        fontSize: { control: 'select', options: fontSizes },
        fontWeight: { control: 'select', options: fontWeights },
        fontColor: { control: 'select', options: fontColors },
        position: {
            control: 'select',
            options: ['top', 'right', 'bottom', 'left'],
            table: { disable: true },
        },
    },
};

export const Default = (args) => {
    return (
        <Tooltip className={`${args.fontWeight} ${args.fontSize} ${args.fontColor} ${args.tooltipColor}`} {...args}>
            <Button bgColor="bg-blue-500" color="text-white">
                확인
            </Button>
        </Tooltip>
    );
}
Default.args = {
    message: 'button tooltip test',
    tooltipColor: 'bg-white',
    fontWeight: 'font-thin',
    fontSize: 'text-xs',
    fontColor: 'text-black',
};

export const ButtonClick = (args) => {
    const [active, setActive] = useState(false);
    const onClick = () => {
        setActive(!active);
    };

    return (
        <Tooltip alwaysDisplay={active} className={`${args.fontWeight} ${args.fontSize} ${args.fontColor} ${args.tooltipColor}`} {...args}>
            <Button bgColor='bg-blue-500' color="text-white" onClick={onClick}>
                확인
            </Button>
        </Tooltip>
    );
}
ButtonClick.args = {
    ...Default.args,
};
export const EventVisible = (args) => {
    return (
        <Tooltip className={`${args.fontWeight} ${args.fontSize} ${args.fontColor} ${args.tooltipColor}`} {...args}>
            <Button disabled={args.active} bgColor={args.active ? 'bg-gray-300' : 'bg-blue-500'} color="text-white">
                확인
            </Button>
        </Tooltip>
    );
}
EventVisible.args = {
    active: true,
    ...Default.args,
    message: '버튼이 disabled 상태이면 tooltip이 나타납니다.',
};
EventVisible.argTypes = {
    active: { table: { disable: false } },
};

export const TooltipPosition = (args) => {
    return (
        <Tooltip className={`${args.fontWeight} ${args.fontSize} ${args.fontColor} ${args.tooltipColor}`} {...args}>
            <Button bgColor='bg-blue-500' color="text-white">
                툴팁을 확인하기 위한 버튼
            </Button>
        </Tooltip>
    );
}
TooltipPosition.args = {
    position: 'bottom',
    ...Default.args,
    message: 'tooltip',
};
TooltipPosition.argTypes = {
    position: { table: { disable: false } },
};
