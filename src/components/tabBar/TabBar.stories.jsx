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
