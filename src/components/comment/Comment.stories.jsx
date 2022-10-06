import styled from 'styled-components';
import { backgroundColors, borderRadiuses, fontColors, fontSizes, fontWeights } from '../common';
import Comment from './Comment';
import CommentContents from './CommentContents';
import CommentIcon from './CommentIcon';

export default {
  title: 'Comment',
  component: Comment,
  argTypes: {
    commentBoxWidth: {
      control: 'select',
      options: ['w-4/12', 'w-1/2', 'w-8/12', 'w-full'],
    },
    commentBoxBgColor: {
      control: 'select',
      options: backgroundColors,
    },

    iconBorderRadius: { control: 'select', options: borderRadiuses },
    iconMarginRight: { control: 'select', options: ['mr-1', 'mr-3', 'mr-5', 'mr-7', 'mr-9'] },
    iconWidth: {
      control: 'select',
      options: ['w-2', 'w-4', 'w-6', 'w-8', 'w-10', 'w-12', 'w-24'],
    },

    commentTitleBgColor: { control: 'select', options: backgroundColors },
    nicknameFontSize: { control: 'select', options: fontSizes },
    nicknameFontWeight: { control: 'select', options: fontWeights },
    nicknameFontColor: { control: 'select', options: fontColors },

    commentContentsWidth: {
      control: 'select',
      options: ['w-1/4', 'w-1/2', 'w-2/3', 'w-3/4', 'w-auto'],
    },
    commentContentsBgColor: { control: 'select', options: backgroundColors },
    commentContentsPadding: {
      control: 'select',
      options: ['p-px', 'p-3', 'p-7', 'p-12', 'p-20', 'p-25'],
    },
  },
};

const CommentBox = styled.div`
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding: 30px;
`;

const Img = styled.img``;

const TimeStamp = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  width: 60px;
  margin-left: 20px;
`;

const CommentTitle = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 5px;
`;

const CommentContent = styled.div``;

// 궁금해서 구글링을 통해 timeStamp 만들어봤습니다.
const today = new Date();
const writeDate = new Date('2022-10-04 13:23:37');

function elapsedText(date) {
  const seconds = 1; //초
  const minute = seconds * 60; // 분
  const hour = minute * 60; // 시
  const day = hour * 24; // 일

  const elapsedTime = Math.trunc((today.getTime() - date.getTime()) / 1000);

  let elapsedText = '';
  if (elapsedTime < seconds) {
    elapsedText = '방금 전';
  } else if (elapsedTime < minute) {
    elapsedText = elapsedTime + '초 전';
  } else if (elapsedTime < hour) {
    elapsedText = Math.trunc(elapsedTime / minute) + '분 전';
  } else if (elapsedTime < day) {
    elapsedText = Math.trunc(elapsedTime / hour) + '시간 전';
  } else if (elapsedTime < day * 30) {
    elapsedText = Math.trunc(elapsedTime / day) + '일 전';
  }

  return elapsedText;
}
//

export const imgIcon = ({
  commentBoxWidth = 'w-8/12',
  commentBoxBgColor = 'bg-white',

  iconBorderRadius = 'rounded',
  iconWidth = 'w-8',
  iconMarginRight = 'mr-1',

  commentTitleBgColor = 'bg-white',

  nicknameFontSize = 'text-base',
  nicknameFontWeight = 'font-bold',
  nicknameFontColor = 'text-black',

  commentContentsWidth = 'w-2/3',
  commentContentsBgColor = 'bg-white',
  commentContentsPadding = 'p-0',
}) => {
  return (
    <Comment>
      {[
        {
          nickname: '고래',
          img: './images/고래.png',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure velit cupiditate unde a, laudantium voluptas sit eos animi et sint esse quaerat corporis fugiat veritatis tenetur eveniet veniam enim?',
        },
        {
          nickname: '여우',
          img: './images/여우.png',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure velit cupiditate unde a, laudantium voluptas sit eos animi et sint esse quaerat corporis fugiat veritatis tenetur eveniet veniam enim?',
        },
        {
          nickname: '독수리',
          img: './images/독수리.png',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure velit cupiditate unde a, laudantium voluptas sit eos animi et sint esse quaerat corporis fugiat veritatis tenetur eveniet veniam enim?',
        },
      ].map((item, i) => (
        <CommentBox className={`${commentBoxWidth} ${commentBoxBgColor}`} key={i}>
          <CommentIcon>
            <Img
              className={`${iconMarginRight} ${iconBorderRadius} ${iconWidth} `}
              src={item.img}
            ></Img>
          </CommentIcon>
          <CommentContents
            className={`${commentContentsWidth} ${commentContentsBgColor}  ${commentContentsPadding}`}
          >
            <CommentTitle
              className={`${nicknameFontSize} ${nicknameFontWeight} ${nicknameFontColor} ${commentTitleBgColor}`}
            >
              {item.nickname}
              <TimeStamp>{elapsedText(writeDate)} </TimeStamp>
            </CommentTitle>
            <CommentContent>{item.content}</CommentContent>
          </CommentContents>
        </CommentBox>
      ))}
    </Comment>
  );
};

export const Text = ({
  commentBoxWidth = 'w-8/12',
  commentBoxBgColor = 'bg-white',

  nicknameFontSize = 'text-base',
  nicknameFontWeight = 'font-bold',
  nicknameFontColor = 'text-black',

  commentContentsPadding = 'p-3',
  commentContentsWidth = 'w-2/3',
  commentContentsBgColor = 'bg-white',
}) => {
  return (
    <Comment>
      {[
        {
          nickname: '고래',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure velit cupiditate unde a, laudantium voluptas sit eos animi et sint esse quaerat corporis fugiat veritatis tenetur eveniet veniam enim?',
        },
        {
          nickname: '여우',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure velit cupiditate unde a, laudantium voluptas sit eos animi et sint esse quaerat corporis fugiat veritatis tenetur eveniet veniam enim?',
        },
        {
          nickname: '독수리',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure velit cupiditate unde a, laudantium voluptas sit eos animi et sint esse quaerat corporis fugiat veritatis tenetur eveniet veniam enim?',
        },
      ].map((item, i) => (
        <CommentBox className={`${commentBoxWidth} ${commentBoxBgColor}`} key={i}>
          <CommentContents
            className={`${commentContentsWidth} ${commentContentsBgColor}  ${commentContentsPadding}`}
          >
            <CommentTitle
              className={`${nicknameFontSize} ${nicknameFontWeight} ${nicknameFontColor}`}
            >
              {item.nickname}
            </CommentTitle>
            <CommentContent>{item.content}</CommentContent>
          </CommentContents>
        </CommentBox>
      ))}
    </Comment>
  );
};
