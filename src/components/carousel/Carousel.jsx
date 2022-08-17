import { Children, useEffect, useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CarouselContext from './CarouselContext';
import Button from '../button/Button';

const CarouselContainer = styled.div`
  width: ${({ itemWidth }) => `${itemWidth}px`};
  position: relative;
  overflow: hidden;
`;
const CarouselItemsWrapper = styled.div`
  width: ${({ translateXAmountLimit }) => `${translateXAmountLimit}px`};
  height: 100%;
  display: flex;
  transform: translateX(${({ translateXAmount }) => `${translateXAmount}px`});
  transition: transform 0.7s ease-in-out;
`;
const NavigationWrapper = styled.div`
  width: ${({ itemWidth }) => `${itemWidth}px`};
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  background-color: transparent;
  height: fit-content;
  z-index: 5;
`;

function Carousel({
  itemWidth = 400,
  autoPlay = true,
  autoPlayDuration = 2000,
  children,
  className,
  ...others
}) {
  const [translateXAmount, setTranslateXAmount] = useState(0);
  const itemCount = Children.toArray(children).length;
  const translateXAmountLimit = itemCount * itemWidth;

  const onClickLeft = () => {
    const newTranslateXAmount = (translateXAmount + itemWidth) % translateXAmountLimit;
    setTranslateXAmount(
      (newTranslateXAmount > 0 ? -translateXAmountLimit : 0) + newTranslateXAmount,
    );
  };
  const onClickRight = useCallback(() => {
    setTranslateXAmount((translateXAmount - itemWidth) % translateXAmountLimit);
  }, [translateXAmount, itemWidth, translateXAmountLimit]);

  useEffect(() => {
    setTranslateXAmount(0);
  }, [itemWidth]);
  useEffect(() => {
    let timer = autoPlay ? setTimeout(onClickRight, autoPlayDuration) : 0;
    return () => {
      if (timer !== 0) clearTimeout(timer);
    };
  }, [translateXAmount, onClickRight, autoPlay, autoPlayDuration]);

  const contextValue = useMemo(() => ({ itemWidth }), [itemWidth]);

  return (
    <CarouselContainer itemWidth={itemWidth} className={className} {...others}>
      <NavigationWrapper itemWidth={itemWidth}>
        <Button
          onClick={onClickLeft}
          className="opacity-20 hover:opacity-75 transition-opacity rounded-full bg-violet-200 p-[14px]  ml-[6px]"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button
          onClick={onClickRight}
          className="opacity-20 hover:opacity-75 transition-opacity rounded-full bg-violet-200 p-[14px] mr-[6px]"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </NavigationWrapper>
      <CarouselItemsWrapper
        translateXAmountLimit={translateXAmountLimit}
        translateXAmount={translateXAmount}
      >
        <CarouselContext.Provider value={contextValue}>{children}</CarouselContext.Provider>
      </CarouselItemsWrapper>
    </CarouselContainer>
  );
}

export default Carousel;
