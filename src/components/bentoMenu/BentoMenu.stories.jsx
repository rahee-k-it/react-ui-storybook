import { backgroundColors, borderRadiuses, fontColors } from '../common';
import BentoMenu from './BentoMenu';
import { faAppleWhole, faBars, faEllipsis, faList } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'BentoMenu',
  component: BentoMenu,

  argTypes: {
    children: { control: 'object' },

    clickTitle: { control: 'text' },
    title: { control: 'text' },
    titleColor: { control: 'select', options: fontColors },

    iconTitle: { control: { type: null } },
    iconBox: { control: { type: null } },
    itemColor: { control: 'select', options: fontColors },

    bentoContainerPadding: {
      control: 'select',
      options: ['p-5', 'p-10', 'p-12', 'p-14', 'p-24', 'p-28', 'p-36'],
    },
    bentoContainerWidth: {
      control: 'select',
      options: [
        'w-72',
        'w-80',
        'w-96',
        'w-auto',
        'w-1/2',
        'w-1/3',
        'w-1/4',
        'w-fit',
        'w-max',
        'w-min',
      ],
    },
    bentoContainerBorderRadius: { control: 'select', options: borderRadiuses },
    bentoContainerBgColor: { control: 'select', options: backgroundColors },
    bentoItemContainerBgColor: { control: 'select', options: backgroundColors },

    gridTemplateColumns: {
      control: 'select',
      options: ['grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5'],
    },
    gridAutoRows: {
      control: 'select',
      options: ['auto-rows-auto', 'auto-rows-min', 'auto-rows-max', 'auto-rows-fr'],
    },
    itemPadding: {
      control: 'select',
      options: ['p-0', 'p-0.5', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5'],
    },
    bentoContainerHeight: { control: 'text' },
  },
};

const Template = (args) => <BentoMenu {...args}></BentoMenu>;

export const Narrow = Template.bind({});
export const Wide = Template.bind({});
export const ColorBento = Template.bind({});

Narrow.args = {
  title: 'Menu',
  clickTitle: '',
  iconTitle: faBars,
  children: [
    '메일',
    '스토리',
    '페이지',
    '그룹',
    '이벤트',
    '광고',
    '게시물',
    '친구',
    '동영상',
    '즐겨찾기',
    '메일',
    '스토리',
    '페이지',
    '그룹',
    '이벤트',
    '광고',
    '게시물',
    '친구',
    '동영상',
    '즐겨찾기',
    '메일',
    '스토리',
    '페이지',
    '그룹',
    '이벤트',
    '광고',
    '게시물',
    '친구',
    '동영상',
    '즐겨찾기',
  ],
  bentoContainerWidth: 'w-96',
  bentoContainerBgColor: 'bg-gray-100',
  bentoItemContainerBgColor: 'bg-white',
  gridTemplateColumns: 'grid-cols-2',
  gridAutoRows: 'auto-rows-fr',
  titleColor: 'text-red-blue',
  iconBox: [
    faBars,
    faList,
    faAppleWhole,
    faAppleWhole,
    faAppleWhole,
    faAppleWhole,
    faAppleWhole,
    faAppleWhole,
    faAppleWhole,
    faAppleWhole,
  ],
};

Wide.args = {
  title: 'Bento',
  iconTitle: faList,
  children: [
    '메일',
    '스토리',
    '페이지',
    '그룹',
    '이벤트',
    '광고',
    '게시물',
    '친구',
    '동영상',
    '메일',
    '스토리',
    '페이지',
    '그룹',
    '이벤트',
    '광고',
    '게시물',
    '친구',
    '동영상',
    '즐겨찾기',
    '메일',
    '스토리',
    '페이지',
    '그룹',
    '이벤트',
    '광고',
    '게시물',
    '친구',
    '동영상',
    '즐겨찾기',
    '메일',
    '스토리',
    '페이지',
    '그룹',
    '이벤트',
    '광고',
    '게시물',
    '친구',
    '동영상',
    '즐겨찾기',
  ],
  bentoContainerWidth: 'w-96',
  bentoContainerBgColor: 'bg-gray-100',
  bentoContainerBorderRadius: 'rounded-3xl',
  bentoItemContainerBgColor: 'bg-white',
  gridTemplateColumns: 'grid-cols-3',
  gridAutoRows: 'auto-rows-fr',
  titleColor: 'text-red-blue',
  iconBox: [faBars, faList, faAppleWhole],
};

ColorBento.args = {
  title: 'Color',
  titleColor: 'text-green-900',
  itemColor: 'text-red-900',
  iconTitle: faEllipsis,
  bentoContainerWidth: 'w-96',
  bentoContainerBgColor: 'bg-red-100',
  bentoItemContainerBgColor: 'bg-green-100',
  gridTemplateColumns: 'grid-cols-4',
  children: ['메일', '스토리', '페이지', '그룹', '이벤트', '광고', '게시물', '친구', '동영상'],
  gridAutoRows: 'auto-rows-fr',
  bentoContainerHeight: 'fit-content',
};
