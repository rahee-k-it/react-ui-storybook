import Carousel from './Carousel';
import CarouselItem from './CarouselItem';

export default {
  title: 'Carousel',
  component: Carousel,

  argTypes: {
    itemWidth: { control: 'select', options: [100, 200, 300] },
    autoPlay: { control: 'boolean' },
  },
};

export const Defatult = (args) => (
  <Carousel {...args}>
    {['images/고래.png', 'images/다람쥐.png', 'images/독수리.png', 'images/새.png'].map(
      (imgSrc, i) => {
        return (
          <CarouselItem key={i}>
            <img alt={imgSrc} width="100%" img={imgSrc} />
          </CarouselItem>
        );
      },
    )}
  </Carousel>
);
