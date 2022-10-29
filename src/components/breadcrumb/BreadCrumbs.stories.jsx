import BreadCrumbs from './BreadCrumbs';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
export default {
  title: 'BreadCrumbs',
  component: BreadCrumbs,
  argTypes: {
    className: { table: { disable: true } },
    separator: { control: 'text' },
  },
};

const Link = styled.a`
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export const Default = (args) => (
  <BreadCrumbs {...args}>
    <Link className="text-gray-500" href="/">
      Home
    </Link>
    <Link className="text-gray-500" href="/?path=/story/breadcrumbs">
      BreadCrumbs
    </Link>
    <span>Default</span>
  </BreadCrumbs>
);
Default.args = {
  separator: '/',
};

export const Separator = (args) => (
  <div className="flex flex-col gap-4">
    {[
      '/',
      '>',
      <span className="text-gray-500">/</span>,
      <FontAwesomeIcon icon={faCaretRight} />,
    ].map((separator, index) => (
      <BreadCrumbs separator={separator} key={`icon-${index}`}>
        <Link className="text-gray-500" href="/">
          Home
        </Link>
        <Link className="text-gray-500" href="/?path=/story/breadcrumbs">
          BreadCrumbs
        </Link>
        <span>Default</span>
      </BreadCrumbs>
    ))}
  </div>
);
Separator.parameters = {
  controls: { exclude: ['separator'] },
};
