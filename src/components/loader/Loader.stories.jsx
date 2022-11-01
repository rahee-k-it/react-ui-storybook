import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faAppleWhole, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import Loader from './Loader';
import { fontColors, fontSizes } from '../common';
import styled from 'styled-components';
const icons = {
  spinner: <FontAwesomeIcon icon={faSpinner} />,
  apple: <FontAwesomeIcon icon={faAppleWhole} />,
  cloud: <FontAwesomeIcon icon={faCloudArrowDown} />,
  undefined: '',
};

export default {
  title: 'Loader',
  component: Loader,
  argTypes: {
    effect: { control: 'select', options: ['spin', 'wink', 'float', 'undefined'] },
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: { type: 'select' },
    },
    message: { control: 'text' },
    iconSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      mapping: { sm: '16px', md: '24px', lg: '32px' },
    },
    iconColor: { control: 'select', options: fontColors },
    messageSize: { control: 'select', options: fontSizes },
    messageColor: { control: 'select', options: fontColors },
  },
};

const Span = styled.span`
  font-size: ${({ iconSize }) => iconSize};
`;
export const Default = ({
  message,
  effect,
  icon,
  iconSize,
  iconColor,
  messageSize,
  messageColor,
}) => {
  return (
    <Loader
      effect={effect}
      icon={
        <Span iconSize={iconSize} className={`${iconColor}`}>
          {icon}
        </Span>
      }
    >
      <span className={`${messageSize} ${messageColor}`}>{message}</span>
    </Loader>
  );
};

Default.args = {
  effect: 'spin',
  icon: 'spinner',
  message: 'loading...',
  iconSize: 'sm',
  iconColor: 'text-black',
  messageSize: 'text-base',
  messageColor: 'text-black',
};
