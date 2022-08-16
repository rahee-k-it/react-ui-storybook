import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import styled from 'styled-components';

export default {
  title: 'Carousel',
  component: Carousel,
  argTypes: {
    itemWidth: { control: 'select', options: [400, 500, 600] },
    autoPlay: { control: 'boolean' },
    autoPlayDuration: { control: 'select', options: [1000, 2000, 3000] },
  },
};

const ItemImg = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url(${({ imgSrc }) => imgSrc});
  width: 100%;
  height: 400px;
`;
export const Defatult = (args) => (
  <Carousel {...args}>
    {['images/고래.png', 'images/다람쥐.png', 'images/독수리.png', 'images/새.png'].map(
      (imgSrc, i) => {
        return (
          <CarouselItem key={i}>
            <ItemImg imgSrc={imgSrc} />
          </CarouselItem>
        );
      },
    )}
  </Carousel>
);
