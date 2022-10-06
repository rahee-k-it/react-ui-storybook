import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div``;

const CommentIcon = ({ children, className, ...others }) => {
  return (
    <IconContainer className={className} {...others}>
      {children}
    </IconContainer>
  );
};

export default CommentIcon;
