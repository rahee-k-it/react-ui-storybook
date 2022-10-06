import React from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Comment({ className, children, ...others }) {
  return (
    <CommentContainer className={className} {...others}>
      {children}
    </CommentContainer>
  );
}

export default Comment;
