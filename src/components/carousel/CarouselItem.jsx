import { useContext } from 'react';
import styled from 'styled-components';
import CarouselContext from './CarouselContext';

const CarouselItemContainer = styled.div`
  height: 100%;
  width: ${({ itemWidth }) => `${itemWidth}px`};
`;

function CarouselItem({ children: child }) {
  const { itemWidth = 400 } = useContext(CarouselContext);
  return <CarouselItemContainer itemWidth={itemWidth}>{child}</CarouselItemContainer>;
}

export default CarouselItem;
