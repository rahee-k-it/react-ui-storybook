import React from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  position: relative;
  overflow: hidden;
  ${({ width }) => (width ? `width: ${width}px` : '200px')};
`;

function Carousel({ className, carouselContainerWidth = 200, ...others }) {
  let widthRatio = carouselContainerWidth;

  return (
    <>
      <CarouselContainer width={widthRatio} className={className} {...others}></CarouselContainer>
    </>
  );
}

export default Carousel;
