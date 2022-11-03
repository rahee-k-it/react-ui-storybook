import {
  faCalculator,
  faCamera,
  faComment,
  faHome,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { backgroundColors, fontColors } from '../common';
import TabBar from './TabBar';

export default {
  component: TabBar,
  title: 'TabBar',
  argTypes: {
    tabBarBgColor: { control: 'select', options: backgroundColors },
    clickedTextColor: {
      control: 'select',
      options: fontColors,
    },
  },
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vw;
  background-color: #8e44ad;
  padding: 50px;
`;

const Badge = styled.div`
  position: absolute;
  left: 47.5%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
`;

export const Bar = ({
  tabBarBgColor = 'bg-white',
  tapBarPosition = 'border-t-[2.5px]',
  clickedBorderColor = 'border-violet-300',
  clickedTextColor = 'text-violet-500',
  others,
}) => {
  const [tabBarId, setTabBarId] = useState(0);

  const handleClick = useCallback((e) => {
    setTabBarId(Number(e.target.closest('li').dataset.liId));
  }, []);

  const infoArr = [
    <FontAwesomeIcon icon={faPhone} />,
    <FontAwesomeIcon icon={faComment} />,
    <FontAwesomeIcon icon={faHome} />,
    <FontAwesomeIcon icon={faCamera} />,
    <FontAwesomeIcon icon={faCalculator} />,
  ];
  return (
    <Wrapper>
      <TabBar className={`w-96 p-3 rounded-3xl ${tabBarBgColor}`} {...others}>
        {infoArr.map((item, index) => (
          <div
            onClick={handleClick}
            key={index}
            className={`flex justify-center border-solid p-5 cursor-pointer ${
              index === tabBarId &&
              `border border-solid border-0 ${tapBarPosition} ${clickedBorderColor} ${clickedTextColor}`
            }`}
          >
            {item && <span>{item}</span>}
          </div>
        ))}
      </TabBar>
    </Wrapper>
  );
};
Bar.argTypes = {
  tapBarPosition: { control: 'select', options: ['border-t-[2.5px]', 'border-b-[2.5px]'] },
  clickedBorderColor: {
    control: 'select',
    options: [
      'border-red-500',
      'border-blue-500',
      'border-yellow-500',
      'border-lime-500',
      'border-violet-500',
    ],
  },
};

export const BadgeBar = ({
  tabBarBgColor = 'bg-white',
  badgePosition = 'top-0',
  clickedBadgeColor = 'bg-violet-500',
  clickedTextColor = 'text-violet-500',
  others,
}) => {
  const [tabBarId, setTabBarId] = useState(0);

  const handleClick = useCallback((e) => {
    setTabBarId(Number(e.target.closest('li').dataset.liId));
  }, []);

  const infoArr = [
    <FontAwesomeIcon icon={faPhone} />,
    <FontAwesomeIcon icon={faComment} />,
    <FontAwesomeIcon icon={faHome} />,
    <FontAwesomeIcon icon={faCamera} />,
    <FontAwesomeIcon icon={faCalculator} />,
  ];
  return (
    <Wrapper>
      <TabBar className={`w-96 p-3 rounded-3xl ${tabBarBgColor}`} {...others}>
        {infoArr.map((item, index) => (
          <div
            onClick={handleClick}
            key={index}
            className={`relative flex justify-center p-5 cursor-pointer ${
              index === tabBarId && `${clickedTextColor}`
            }`}
          >
            <div>
              {index === tabBarId && (
                <Badge className={`${clickedBadgeColor} ${badgePosition} animate-pulse`}></Badge>
              )}
              {item && <span>{item}</span>}
            </div>
          </div>
        ))}
      </TabBar>
    </Wrapper>
  );
};
BadgeBar.argTypes = {
  badgePosition: { control: 'select', options: ['top-0', 'bottom-0'] },
  clickedBadgeColor: { control: 'select', options: backgroundColors },
};

export const BackgroundBar = ({
  tabBarBgColor = 'bg-white',
  clickedTextColor = 'text-violet-500',
  clickedBgColor = 'bg-violet-300',
  others,
}) => {
  const [tabBarId, setTabBarId] = useState(0);

  const handleClick = useCallback((e) => {
    setTabBarId(Number(e.target.closest('li').dataset.liId));
  }, []);

  const infoArr = [
    { icon: <FontAwesomeIcon icon={faPhone} />, title: 'Phone' },
    { icon: <FontAwesomeIcon icon={faComment} />, title: 'Comment' },
    { icon: <FontAwesomeIcon icon={faHome} />, title: 'Home' },
    { icon: <FontAwesomeIcon icon={faCamera} />, title: 'Camera' },
    { icon: <FontAwesomeIcon icon={faCalculator} />, title: 'Calculator' },
  ];
  return (
    <Wrapper>
      <TabBar className={`w-96 p-3 rounded-3xl ${tabBarBgColor}`} {...others}>
        {infoArr.map((item, index) => (
          <div
            onClick={handleClick}
            key={index}
            className={`flex flex-col justify-center items-center p-4 cursor-pointer rounded-2xl ${
              index === tabBarId && `${clickedBgColor} ${clickedTextColor}`
            }`}
          >
            {item.icon && <span className={'mb-1'}>{item.icon}</span>}
            {item.title && <span className={'text-xs'}>{item.title}</span>}
          </div>
        ))}
      </TabBar>
    </Wrapper>
  );
};
BackgroundBar.argTypes = {
  clickedBgColor: {
    control: 'select',
    options: backgroundColors,
  },
};
