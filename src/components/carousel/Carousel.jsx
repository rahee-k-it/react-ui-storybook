import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  position: relative;
  overflow: hidden;
  ${({ width }) => (width ? `width: ${width}px` : '200px')};
`;

const LeftBtn = styled.button`
  cursor: pointer;
  opacity: ${(props) => props.opacity};
  svg {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 10px;
  }
`;

const RightBtn = styled.button`
  cursor: pointer;
  opacity: ${(props) => props.opacity};
  svg {
    position: absolute;
    z-index: 2;
    top: 50%;
    right: 10px;
  }
`;

const AutoBox = styled.div`
  opacity: 0;
`;

const CarouselItemContainer = styled.div`
  height: 100%;
  width: 200vw;
  transform: translateX(${(props) => props.transForm + 'px'});
  transition: transform 0.7s ease-in-out;
  position: relative;
`;

const CarouselItemStyle = styled.div`
  float: left;
  height: 100%;
`;

const Span = styled.span`
  position: absolute;
  display: inline-block;
  top: 0px;
  text-align: center;
  padding-top: 25vh;
  height: 100%;
  ${({ itemWidth }) => (itemWidth ? `width: ${itemWidth}px` : '200px')};
  z-index: 4;
`;

const ItemImg = styled.img`
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.img});
  ${({ itemWidth }) => (itemWidth ? `width: ${itemWidth}px` : '200px')};
  height: 100%;
`;

function Carousel({
  className,
  carouselContainerWidth = 200,
  childrens,
  itemWidth = 200,
  autoPlay,
  ...others
}) {
  let widthRatio = carouselContainerWidth;

  const [transForm, setTransForm] = useState(0);

  const length = childrens.length;
  const endLength = -(length * itemWidth) + carouselContainerWidth;

  const onClickLeft = () => {
    setTransForm((trans) => (trans >= 0 ? endLength : (trans += 200)));
  };

  const onClickRight = () => {
    setTransForm((trans) => (trans <= endLength ? (trans = 0) : (trans -= 200)));
  };

  const onAutoPlay = () => {
    setTransForm((trans) => (trans < endLength ? (trans = 0) : (trans -= 200)));
  };

  return (
    <>
      <CarouselContainer width={widthRatio} className={className} {...others}></CarouselContainer>

      <LeftBtn onClick={onClickLeft} opacity={autoPlay ? 0 : 1}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </LeftBtn>
      <RightBtn onClick={onClickRight} opacity={autoPlay ? 0 : 1}>
        <FontAwesomeIcon icon={faArrowRight} />
      </RightBtn>

      <CarouselItemContainer transForm={transForm}>
        {childrens.map((item, i) => (
          <CarouselItemStyle key={i}>
            <ItemImg img={item.imgAddress} itemWidth={itemWidth} />
            <Span itemWidth={itemWidth}>{item.children}</Span>
          </CarouselItemStyle>
        ))}
      </CarouselItemContainer>

      <AutoBox>{autoPlay ? setTimeout(onAutoPlay, 2000) : ''}</AutoBox>
    </>
  );
}

export default Carousel;
