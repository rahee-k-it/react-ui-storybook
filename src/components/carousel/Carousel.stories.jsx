import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import styled from 'styled-components';

export default {
  title: 'Carousel',
  component: Carousel,
  argTypes: {
    itemWidth: { control: 'select', options: [200, 300, 400, 500, 600] },
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

const TextContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  line-height: 20px;
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  header {
    text-align: center;
    margin-bottom: 40px;
  }
  div {
    height: 80%;
  }
  footer {
    text-align: center;
  }
`;

const CombinedImg = styled.div`
  position: absolute;
  background-position: center;
  background-size: cover;
  background-image: url(${({ imgSrc }) => imgSrc});
  width: 100%;
  height: 100%;
`;

export const BgImg = (args) => (
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

export const Text = (args) => (
  <Carousel {...args}>
    {[
      {
        children: {
          title: '고래',
          content:
            '수중생활을 하므로 포유류이면서도 물고기와 비슷한 모양을 하고 있다. 앞발은 진화하여 지느러미 모양을 하고 있으며, 몸을 물속에서 뜨게 하기 위한 가슴지느러미가 있다. 또, 꼬리부분은 꼬리지느러미로 변형되어 몸의 진행을 맡아본다.',
          footer: '출처 : Google',
        },
      },
      {
        children: {
          title: '다람쥐',
          content:
            '수중생활을 하므로 포유류이면서도 물고기와 비슷한 모양을 하고 있다. 앞발은 진화하여 지느러미 모양을 하고 있으며, 몸을 물속에서 뜨게 하기 위한 가슴지느러미가 있다. 또, 꼬리부분은 꼬리지느러미로 변형되어 몸의 진행을 맡아본다.',
          footer: '출처 : Google',
        },
      },
      {
        children: {
          title: '독수리',
          content:
            '수중생활을 하므로 포유류이면서도 물고기와 비슷한 모양을 하고 있다. 앞발은 진화하여 지느러미 모양을 하고 있으며, 몸을 물속에서 뜨게 하기 위한 가슴지느러미가 있다. 또, 꼬리부분은 꼬리지느러미로 변형되어 몸의 진행을 맡아본다.',
          footer: '출처 : Google',
        },
      },
      {
        children: {
          title: '새',
          content:
            '수중생활을 하므로 포유류이면서도 물고기와 비슷한 모양을 하고 있다. 앞발은 진화하여 지느러미 모양을 하고 있으며, 몸을 물속에서 뜨게 하기 위한 가슴지느러미가 있다. 또, 꼬리부분은 꼬리지느러미로 변형되어 몸의 진행을 맡아본다.',
          footer: '출처 : Google',
        },
      },
    ].map((item, i) => {
      return (
        <CarouselItem key={i}>
          <TextContainer>
            <header>{item.children.title}</header>
            <div>{item.children.content}</div>
            <footer>{item.children.footer}</footer>
          </TextContainer>
        </CarouselItem>
      );
    })}
  </Carousel>
);

export const Combined = (args) => (
  <Carousel {...args}>
    {[
      {
        children: {
          title: '고래',
          content:
            '수중생활을 하므로 포유류이면서도 물고기와 비슷한 모양을 하고 있다. 앞발은 진화하여 지느러미 모양을 하고 있으며, 몸을 물속에서 뜨게 하기 위한 가슴지느러미가 있다. 또, 꼬리부분은 꼬리지느러미로 변형되어 몸의 진행을 맡아본다.',
          footer: '출처 : Google',
        },
        bgImg: 'images/고래.png',
      },
      {
        children: {
          title: '다람쥐',
          content:
            '수중생활을 하므로 포유류이면서도 물고기와 비슷한 모양을 하고 있다. 앞발은 진화하여 지느러미 모양을 하고 있으며, 몸을 물속에서 뜨게 하기 위한 가슴지느러미가 있다. 또, 꼬리부분은 꼬리지느러미로 변형되어 몸의 진행을 맡아본다.',
          footer: '출처 : Google',
        },
        bgImg: 'images/다람쥐.png',
      },
      {
        children: {
          title: '독수리',
          content:
            '수중생활을 하므로 포유류이면서도 물고기와 비슷한 모양을 하고 있다. 앞발은 진화하여 지느러미 모양을 하고 있으며, 몸을 물속에서 뜨게 하기 위한 가슴지느러미가 있다. 또, 꼬리부분은 꼬리지느러미로 변형되어 몸의 진행을 맡아본다.',
          footer: '출처 : Google',
        },
        bgImg: 'images/독수리.png',
      },
      {
        children: {
          title: '새',
          content:
            '수중생활을 하므로 포유류이면서도 물고기와 비슷한 모양을 하고 있다. 앞발은 진화하여 지느러미 모양을 하고 있으며, 몸을 물속에서 뜨게 하기 위한 가슴지느러미가 있다. 또, 꼬리부분은 꼬리지느러미로 변형되어 몸의 진행을 맡아본다.',
          footer: '출처 : Google',
        },
        bgImg: 'images/새.png',
      },
    ].map((item, i) => {
      return (
        <CarouselItem key={i}>
          <CombinedImg imgSrc={item.bgImg} />
          <TextContainer>
            <header>{item.children.title}</header>
            <div>{item.children.content}</div>
            <footer>{item.children.footer}</footer>
          </TextContainer>
        </CarouselItem>
      );
    })}
  </Carousel>
);
