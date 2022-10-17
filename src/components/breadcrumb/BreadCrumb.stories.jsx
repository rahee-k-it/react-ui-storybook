import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { backgroundColors, fontColors, fontSizes } from '../common';
import BreadCrumb from './BreadCrumb';

export default {
  title: 'BreadCrumb',
  component: BreadCrumb,
  argTypes: {
    onClick: { table: { disable: true } },
    wrapperBgColor: { control: 'select', options: backgroundColors },

    partitionIcon: {
      control: 'select',
      options: ['<', '>', '|', '/'],
    },
    partionIconFontSize: { control: 'select', options: fontSizes },
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
const Wrapper = styled.div`
  display: flex;
  width: max-content;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Default = ({
  linkBoxPadding = 'p-3',
  partitionIcon,
  partionIconFontSize = 'text-base',
  linkBoxXMargin = 'mx-3',
  linkBoxFontSize = 'text-base',
  linkBoxFontColor = 'text-black',
  wrapperBgColor = 'white',
}) => {
  const info = [
    { url: '/', title: 'Home', id: new Date() * Math.random() },
    { url: '/facebook', title: 'Facebook', id: new Date() * Math.random() },
    { url: '/github', title: 'Github', id: new Date() * Math.random() },
    { url: `${window.location.href}`, title: '현재 Page', id: new Date() * Math.random() },
  ];

  return (
    <Wrapper className={wrapperBgColor ?? 'bg-white'}>
      {info.map((item, i) => (
        <BreadCrumb
          onClick={action(item.title)}
          length={i}
          key={item.id}
          id={item.id}
          clickUrl={item.url}
          clickTitle={item.title}
          partitionIcon={partitionIcon}
          partitionIconBoxClassName={`${partionIconFontSize}`}
          linkBoxClassName={`${linkBoxPadding} ${linkBoxXMargin} ${linkBoxFontSize} ${linkBoxFontColor} ${
            item.url === `${window.location.href}`
              ? ''
              : `hover:underline cursor-pointer opacity-50 `
          }`}
        ></BreadCrumb>
      ))}
    </Wrapper>
  );
};

Default.argTypes = {
  onClick: (clickedUrl, clickedTitle, id) => {
    console.log(clickedUrl, clickedTitle, id);
  },
};
