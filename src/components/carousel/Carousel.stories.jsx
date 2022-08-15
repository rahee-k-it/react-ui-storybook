import Carousel from './Carousel';

export default {
  title: 'Carousel',
  component: Carousel,

  argTypes: {
    childrens: { control: { type: 'null' } },
    carouselContainerWidth: { control: 'select', options: [100, 200, 400, 600, 800] },
    itemWidth: { control: 'select', options: [100, 200, 300] },
    autoPlay: { control: 'boolean' },
    className: {
      control: 'select',
      options: ['h-24', 'h-28', 'h-32', 'h-40', 'h-48', 'h-52', 'h-64', 'h-80', 'h-96'],
    },
  },
};

const Template = (args) => <Carousel {...args}></Carousel>;

export const BgImg = Template.bind({});
export const Content = Template.bind({});
export const Combined = Template.bind({});

BgImg.args = {
  childrens: [
    { imgAddress: 'images/고래.png' },
    { imgAddress: 'images/다람쥐.png' },
    { imgAddress: 'images/독수리.png' },
    { imgAddress: 'images/새.png' },
    { imgAddress: 'images/여우.png' },
    { imgAddress: 'images/코끼리.png' },
    { imgAddress: 'images/펠리칸.png' },
    { imgAddress: 'images/호랑이.png' },
  ],
  carouselContainerWidth: 400,
};

Content.args = {
  childrens: [
    {
      children: (
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            fontSize: '12px',
            backgroundColor: 'ivory',
            padding: '0px 15px',
          }}
        >
          <h1>Carousel</h1>
          <p style={{ margin: '40px 20px' }}>
            carousel UI란 여러 개의 이미지(혹은 영상)을 슬라이드 형태로 순환하며 보여주는 방식의
            UI를 뜻합니다.
          </p>
          <div>출처 : 한국민족문화대백과</div>
        </div>
      ),
    },
    {
      children: '2',
    },
    {
      children: '3',
    },
    {
      children: '4',
    },
    {
      children: '5',
    },
    {
      children: '6',
    },
    {
      children: '7',
    },
    {
      children: '8',
    },
  ],
};

Combined.args = {
  childrens: [
    {
      imgAddress: 'images/고래.png',
      children: (
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            fontSize: '12px',
            color: 'white',
            padding: '0px 30px',
          }}
        >
          <div>고래</div>
          <div>
            수중생활을 하므로 포유류이면서도 물고기와 비슷한 모양을 하고 있다. 앞발은 진화하여
            지느러미 모양을 하고 있으며, 몸을 물속에서 뜨게 하기 위한 가슴지느러미가 있다. 또, 꼬리
            부분은 꼬리지느러미로 변형되어 몸의 진행을 맡아본다.
          </div>
          <div>출처 : 한국민족문화대백과</div>
        </div>
      ),
    },
    { children: '2', imgAddress: 'images/다람쥐.png' },
    { children: '3', imgAddress: 'images/독수리.png' },
    { children: '4', imgAddress: 'images/새.png' },
    { children: '5', imgAddress: 'images/여우.png' },
    { children: '6', imgAddress: 'images/코끼리.png' },
    { children: '7', imgAddress: 'images/펠리칸.png' },
    { children: '8', imgAddress: 'images/호랑이.png' },
  ],
  autoPlay: false,
};
