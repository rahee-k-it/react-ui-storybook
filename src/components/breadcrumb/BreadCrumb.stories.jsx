import BreadCrumb from './BreadCrumb';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { backgroundColors, fontColors, fontSizes } from '../common';

export default {
  title: 'BreadCrumb',
  component: BreadCrumb,
  argTypes: {
    className: { table: { disable: true } },
    separator: { control: 'select', options: ['/', '|', '<', '>'] },
    onClick: { table: { disable: true } },
    wrapperBgColor: { control: 'select', options: backgroundColors },
    linkBoxPadding: {
      control: 'select',
      options: ['p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-6'],
    },

    linkBoxXMargin: {
      control: 'select',
      options: ['mx-1', 'mx-3', 'mx-4', 'mx-5', 'mx-7', 'mx-9'],
    },
    linkBoxFontSize: { control: 'select', options: fontSizes },
    linkBoxFontColor: { control: 'select', options: fontColors },
  },
};

const Link = styled.a`
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export const Default = ({
  wrapperBgColor = 'white',
  linkBoxPadding = 'p-3',
  linkBoxXMargin = 'mx-3',
  linkBoxFontSize = 'text-base',
  linkBoxFontColor = 'text-gray-500',
  args,
}) => {
  const info = [
    { url: '/', title: 'Home' },
    { url: '/facebook', title: 'Facebook' },
    { url: '/github', title: 'Github' },
  ];
  return (
    <BreadCrumb onClick={action()} className={`w-fit p-3 ${wrapperBgColor}`} {...args}>
      {info.map((item, i) => (
        <Link
          className={`${linkBoxPadding} ${linkBoxXMargin} ${linkBoxFontSize} ${linkBoxFontColor}`}
          href={item.href}
          key={i}
        >
          {item.title}
        </Link>
      ))}
      <span className={`${linkBoxPadding} ${linkBoxXMargin} ${linkBoxFontSize}`}>Default</span>
    </BreadCrumb>
  );
};

Default.args = {
  separator: '/',
  // console.log(e.target.href, e.target.innerText);
};
