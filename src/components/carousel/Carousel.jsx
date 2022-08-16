import { Children, useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CarouselContext from './CarouselContext';
import Button from '../button/Button';

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`;
const CarouselItemWrapper = styled.div`
  height: 100%;
  transform: translateX(${({ translateXAmount }) => `${translateXAmount}px`});
  transition: transform 0.7s ease-in-out;
`;
function Carousel({ itemWidth = 200, autoPlay = true, children, className, ...others }) {
  const [translateXAmount, setTranslateXAmount] = useState(0);
  const itemCount = Children.toArray(children).length;
  const translateXAmountLimit = itemCount * itemWidth;

  const onClickLeft = () => {
    setTranslateXAmount((translateXAmount + itemWidth) % translateXAmountLimit);
  };

  const onClickRight = () => {
    setTranslateXAmount((translateXAmount - itemWidth) % translateXAmountLimit);
  };
  // useEffect(() => {
  //   let timer = setTimeout(onClickRight, 2000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [translateXAmount]);
  const contextValue = useMemo(() => ({ itemWidth }), [itemWidth]);
  return (
    <CarouselContainer className={className} {...others}>
      <Button
        onClick={onClickLeft}
        className="opacity-50 hover:opacity-100 fixed top-1/2 bottom-1/2 left-[10px]"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
      <Button
        onClick={onClickRight}
        className="opacity-50 hover:opacity-100 fixed top-1/2 bottom-1/2 right-[10px]"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
      <CarouselItemWrapper translateXAmount={translateXAmount}>
        <CarouselContext.Provider value={contextValue}>{children}</CarouselContext.Provider>
      </CarouselItemWrapper>
    </CarouselContainer>
  );
}

export default Carousel;
