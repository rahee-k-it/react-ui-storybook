import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faList, faComment, faGear, faImage } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5em;
  //width: 15em; // props
  min-width: 16em;
  color: white;
`;

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  margin: 0 1em;
`;

const HeaderWrapper = styled(Wrapper)`
  z-index: 2;
  width: 90%;
  height: 50px;
  margin-top: 2em;
  margin-bottom: 1.2em;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    transition: 0.1s ease-in-out;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const HeaderIcon = styled.span`
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 10px;
  border-radius: 10px;
`;

const HeaderContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40px;
  margin: 1em 0;
  max-width: 70%;
  overflow: hidden;
  p:nth-child(2) {
    margin-top: 0.3em;
    font-size: 0.7em;
  }
`;

const MenuWrapper = styled(Wrapper)`
  z-index: 2;
  width: 85%;
  height: 40px;
  margin: 0.1em 0;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    transition: 0.1s ease-in-out;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const MenuIcon = styled.span`
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

const MenuContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40px;
  margin: 10px 0;
  max-width: 75%;
  overflow: hidden;
  p {
    font-size: 0.8em;
  }
`;

function Sidebar({ bgColor = 'bg-blue-600' }) {
  //const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <SidebarWrapper className={`${bgColor}`}>
      <HeaderWrapper>
        <HeaderIcon className={`${bgColor}`}>
          <FontAwesomeIcon icon={faImage} />
        </HeaderIcon>
        <HeaderContents>
          <p>Header</p>
          <p>This is header</p>
        </HeaderContents>
      </HeaderWrapper>
      <MenuWrapper href="http://www.naver.com">
        <MenuIcon>
          <FontAwesomeIcon icon={faList} />
        </MenuIcon>
        <MenuContents>
          <p>Dashboards</p>
        </MenuContents>
      </MenuWrapper>
      <MenuWrapper>
        <MenuIcon>
          <FontAwesomeIcon icon={faComment} />
        </MenuIcon>
        <MenuContents>
          <p>Chats</p>
        </MenuContents>
      </MenuWrapper>
      <MenuWrapper>
        <MenuIcon>
          <FontAwesomeIcon icon={faUserGroup} />
        </MenuIcon>
        <MenuContents>
          <p>Teams</p>
        </MenuContents>
      </MenuWrapper>
      <MenuWrapper>
        <MenuIcon>
          <FontAwesomeIcon icon={faGear} />
        </MenuIcon>
        <MenuContents>
          <p>Settings</p>
        </MenuContents>
      </MenuWrapper>
    </SidebarWrapper>
  );
}

export default Sidebar;
