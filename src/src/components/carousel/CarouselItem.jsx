import { useContext } from 'react';
import styled from 'styled-components';
import CarouselContext from './CarouselContext';

const CarouselItemContainer = styled.div`
  height: 100%;
  width: ${({ itemWidth }) => `${itemWidth}px`};
  position: relative;
`;

function CarouselItem({ children }) {
  const { itemWidth = 400 } = useContext(CarouselContext);
  return <CarouselItemContainer itemWidth={itemWidth}>{children}</CarouselItemContainer>;
}

export default CarouselItem;
