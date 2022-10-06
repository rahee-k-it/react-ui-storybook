import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

function CommentContents({ children, className, ...others }) {
  return (
    <Content className={className} {...others}>
      {children}
    </Content>
  );
}

export default CommentContents;
