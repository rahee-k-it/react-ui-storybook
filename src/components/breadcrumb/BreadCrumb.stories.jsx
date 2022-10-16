import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import BreadCrumb from './BreadCrumb';

export default {
  title: 'BreadCrumb',
  component: BreadCrumb,
  argTypes: {
    onClick: { table: { disable: true } },
    partitionIconBoxClassName: { table: { disable: true } },
    partitionIcon: {
      control: 'select',
      options: ['<', '>', '|', '/'],
    },
    linkBoxPadding: {
      control: 'select',
      options: ['p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-6'],
    },

    linkBoxXMargin: {
      control: 'select',
      options: ['mx-1', 'mx-3', 'mx-4', 'mx-5', 'mx-7', 'mx-9'],
    },
  },
};
const Wrapper = styled.div`
  display: flex;
  width: max-content;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Default = ({ linkBoxPadding = 'p-3', partitionIcon, linkBoxXMargin = 'mx-3' }) => {
  const info = [
    { url: '/', title: 'Home', id: new Date() * Math.random() },
    { url: '/facebook', title: 'Facebook', id: new Date() * Math.random() },
    { url: '/github', title: 'Github', id: new Date() * Math.random() },
    { url: `${window.location.href}`, title: '현재 Page', id: new Date() * Math.random() },
  ];

  return (
    <Wrapper>
      {info.map((item, i) => (
        <BreadCrumb
          onClick={action(item.title)}
          length={i}
          key={item.id}
          id={item.id}
          clickUrl={item.url}
          clickTitle={item.title}
          partitionIcon={partitionIcon}
          partitionIconBoxClassName={''}
          linkBoxClassName={`${linkBoxPadding} ${linkBoxXMargin} ${
            item.url === `${window.location.href}`
              ? ''
              : `hover:underline cursor-pointer text-gray-500`
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
