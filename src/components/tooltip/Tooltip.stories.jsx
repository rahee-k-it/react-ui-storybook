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
        tooltipColor: { control: 'select', options: backgroundColors },
        position: { control: 'select', options: position },
        fontSize: { control: 'select', options: fontSizes },
        fontWeight: { control: 'select', options: fontWeights },
        fontColor: { control: 'select', options: fontColors },
    },
};

export const Default = (args) => {
    return (
        <Tooltip {...args}>
            <Button bgColor="bg-blue-500" color="text-white">
                확인
            </Button>
        </Tooltip>
    );
}
Default.args = {
    message: 'button tooltip test',
    tooltipColor:'bg-white',
    fontWeight: 'font-thin',
    fontSize: 'text-xs',
    fontColor: 'text-black',
};

export const EventVisible = (args) => {
    return (
        <Tooltip {...args}>
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
        <Tooltip {...args}>
            <Button bgColor='bg-blue-500' color="text-white">
                툴팁을 확인하기 위한 버튼
            </Button>
        </Tooltip>
    );
}
TooltipPosition.args = {
    position: 'object-bottom',
    ...Default.args,
    message: 'tooltip',
};
