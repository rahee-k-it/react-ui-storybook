import { useState, useCallback } from 'react';
import { faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { backgroundColors, borderRadiuses, fontColors } from '../common';
import Toggle from '../toggle/Toggle';
import Badge from './Badge';
import BadgeDesription from './Badge.md';

export default {
  component: Badge,
  title: 'Badge',
  argTypes: {
    showBadge: { table: { disable: true } },
    onChange: { table: { disable: true } },
    badgeBgColor: { control: 'select', options: backgroundColors },
    badgeFontColor: { control: 'select', options: fontColors },
    badgeBorderRadius: { control: 'select', options: borderRadiuses },
    badgePosition: {
      control: 'select',
      options: ['leftTop', 'leftBottom', 'rightTop', 'rightBottom'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: BadgeDesription,
      },
    },
  },
};

const Wrapper = styled.div`
  margin: 40px;
  position: relative;
  width: fit-content;
  margin-bottom: 25px;
`;

const ButtonBox = styled.div`
  position: absolute;
  top: 60px;
  left: 100px;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 50px;
  font-size: 25px;

  button {
    width: 100%;
    &:hover {
      background-color: #f5f5f7;
    }
  }
`;

const BadgeBox = styled.div`
  position: absolute;
  left: ${(props) => `${props.badgeXPosition}px`};
  top: ${(props) => `${props.badgeYPosition}px`};
`;

export const CustomBadge = ({
  badgeBgColor = 'bg-red-500',
  badgeBorderRadius = 'rounded-full',
  badgePosition = 'rightTop',
  badgeContents = 'Error',
  badgeXPosition = '405',
  badgeYPosition = '13',
  badgeFontColor = 'text-white',
}) => {
  return (
    <Wrapper>
      <div className="bg-gray-300 p-2 rounded">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, sapiente exercitationem
        molestiae quos odit maxime.
      </div>
      <BadgeBox badgeXPosition={badgeXPosition} badgeYPosition={badgeYPosition}>
        <Badge
          badgePosition={badgePosition}
          className={`text-white flex w-15 ${badgeBorderRadius} ${badgeBgColor} ${badgeFontColor}`}
        >
          <span>{badgeContents}</span>
        </Badge>
      </BadgeBox>
    </Wrapper>
  );
};

CustomBadge.argTypes = {
  badgeContents: { control: 'text' },
  badgeXPosition: { control: 'number' },
  badgeYPosition: { control: 'number' },
};

export const OnAndOffBadge = ({
  badgeBgColor = 'bg-blue-500',
  badgeBorderRadius = 'rounded-full',
  badgePosition = 'rightTop',
  badgeFontColor = 'text-white',
}) => {
  const [showBadge, setShowBadge] = useState(false);

  const onClick = useCallback(() => {
    setShowBadge(!showBadge);
  }, [showBadge]);

  return (
    <>
      <Wrapper>
        <FontAwesomeIcon icon={faBell} />
        <Badge
          showBadge={showBadge}
          badgePosition={badgePosition}
          className={`${badgeBorderRadius} ${badgeBgColor} ${badgeFontColor}`}
        ></Badge>
      </Wrapper>
      <div className="ml-6">
        <Toggle
          leftBgColor={'bg-gray-300'}
          rightBgColor={'bg-green-500'}
          size={'text-xs'}
          disabled={false}
          defaultState={showBadge}
          onChange={onClick}
        ></Toggle>
      </div>
    </>
  );
};

OnAndOffBadge.parameters = {
  controls: {
    exclude: ['badgeFontColor'],
  },
};
export const ChangeBadge = ({
  badgeBgColor = 'bg-green-500',
  badgeBorderRadius = 'rounded-full',
  badgePosition = 'rightTop',
  badgeFontColor = 'text-white',
}) => {
  const [plusNumber, setPlusNumber] = useState(0);

  const onClickPlus = useCallback(() => {
    setPlusNumber((prev) => prev + 1);
  }, []);

  const onClickMinus = useCallback(() => {
    setPlusNumber((prev) => (prev === 0 ? 0 : prev - 1));
  }, []);

  return (
    <>
      <Wrapper>
        <FontAwesomeIcon icon={faEnvelope} />

        <Badge
          showBadge={plusNumber === 0 ? false : true}
          badgePosition={badgePosition}
          className={`text-xs text-white p-0.5 w-5 ${badgeBorderRadius} ${badgeBgColor} ${badgeFontColor}`}
        >
          <span>{plusNumber}</span>
        </Badge>
      </Wrapper>
      <ButtonBox>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
      </ButtonBox>
    </>
  );
};
