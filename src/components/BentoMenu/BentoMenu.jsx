import React, { useState } from 'react';
import styled from 'styled-components';

const ClickBox = styled.span``;

const Wrapper = styled.div``;

const Container = styled.div``;

const Menu = styled.div``;

const Box = styled.div``;

const Icon = styled.div``;
const Title = styled.div``;

function BentoMenu({ title, clickTitle }) {
  const [bento, setBento] = useState(false);

  const onClick = () => {
    setBento((bento) => !bento);
  };
  return (
    <>
      <ClickBox onClick={onClick}>
        <span>{clickTitle}</span>
      </ClickBox>
      {bento ? (
        <>
          <Wrapper>
            <Menu>{title}</Menu>
            <Container>
              <Box>
                <Icon>1</Icon>
                <Title>one</Title>
              </Box>
              <Box>
                <Icon>2</Icon>
                <Title>two</Title>
              </Box>
              <Box>
                <Icon>3</Icon>
                <Title>T</Title>
              </Box>
              <Box>
                <Icon>1</Icon>
                <Title>one</Title>
              </Box>
              <Box>
                <Icon>1</Icon>
                <Title>one</Title>
              </Box>
              <Box>
                <Icon>1</Icon>
                <Title>one</Title>
              </Box>
              <Box>
                <Icon>1</Icon>
                <Title>one</Title>
              </Box>
              <Box>
                <Icon>1</Icon>
                <Title>one</Title>
              </Box>
              <Box>
                <Icon>1</Icon>
                <Title>one</Title>
              </Box>
            </Container>
          </Wrapper>
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default BentoMenu;
