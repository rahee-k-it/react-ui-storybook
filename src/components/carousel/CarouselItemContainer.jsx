import React from 'react';
import styled from 'styled-components';

const CarouselItemContainerStyle = styled.div`
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

const Content = styled.div`
  position: absolute;
  top: 0px;
  text-align: center;
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

function CarouselItemContainer({ transForm, childrens, itemWidth }) {
  return (
    <CarouselItemContainerStyle transForm={transForm}>
      {childrens.map((item, i) => (
        <CarouselItemStyle key={i}>
          <ItemImg img={item.imgAddress} itemWidth={itemWidth} />
          <Content itemWidth={itemWidth}>{item.children}</Content>
        </CarouselItemStyle>
      ))}
    </CarouselItemContainerStyle>
  );
}

export default CarouselItemContainer;
