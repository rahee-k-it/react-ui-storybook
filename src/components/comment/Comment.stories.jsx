import styled from 'styled-components';
import { backgroundColors, borderRadiuses } from '../common';
import Comment from './Comment';

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

    profileImageBorderRadius: { control: 'select', options: borderRadiuses },
    profileImageMarginRight: {
      control: 'select',
      options: ['mr-1', 'mr-3', 'mr-5', 'mr-7', 'mr-9'],
    },
    profileImagePadding: {
      control: 'select',
      options: ['p-4', 'p-6', 'p-8', 'p-10', 'p-12', 'p-14'],
    },

    commentContentsWidth: {
      control: 'select',
      options: ['w-1/4', 'w-1/2', 'w-2/3', 'w-3/4', 'w-auto'],
    },
    commentContentsBgColor: { control: 'select', options: backgroundColors },
  },
};

const CommentBox = styled.div`
  padding: 15px 0px;
`;

export const Default = ({
  commentBoxWidth = 'w-8/12',
  commentBoxBgColor = 'bg-white',

  profileImageBorderRadius = 'rounded',
  profileImageMarginRight = 'mr-3',
  profileImagePadding = 'p-4',

  commentContentsWidth = 'w-2/3',
  commentContentsBgColor = 'bg-white',
}) => {
  return (
    <>
      {[
        {
          nickname: '기본',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure velit cupiditate unde a, laudantium voluptas sit eos animi et sint esse quaerat corporis fugiat veritatis tenetur eveniet veniam enim?',
          createdAt: '2022-10-02 22:23:37',
        },
        {
          nickname: '다람쥐',
          img: './images/다람쥐.png',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure velit cupiditate unde a, laudantium voluptas sit eos animi et sint esse quaerat corporis fugiat veritatis tenetur eveniet veniam enim?',
          createdAt: '2022-03-02 22:23:37',
        },
        {
          nickname: '독수리',
          img: './images/독수리.png',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure velit cupiditate unde a, laudantium voluptas sit eos animi et sint esse quaerat corporis fugiat veritatis tenetur eveniet veniam enim?',
          createdAt: '2021-10-02 22:23:37',
        },
      ].map((item, i) => (
        <Comment
          key={i}
          commentContainerClassName={`${commentBoxWidth} ${commentBoxBgColor} `}
          profileImg={item.img}
          profileClassName={`${profileImageBorderRadius}  ${profileImageMarginRight} ${profileImagePadding} w-8 h-6 mt-1`}
          commentContentsClassName={`${commentContentsWidth} ${commentContentsBgColor} `}
          commentContentsTitle={item.nickname}
          createdAt={item.createdAt}
        >
          <CommentBox>{item.content}</CommentBox>
        </Comment>
      ))}
    </>
  );
};

export const WithoutProfile = ({
  commentBoxWidth = 'w-8/12',
  commentBoxBgColor = 'bg-white',

  commentContentsWidth = 'w-2/3',
  commentContentsBgColor = 'bg-white',
}) => {
  return (
    <>
      {[
        {
          nickname: '고래',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure velit cupiditate unde a, laudantium voluptas sit eos animi et sint esse quaerat corporis fugiat veritatis tenetur eveniet veniam enim?',
          createdAt: '2022-10-08 10:00:37',
        },
        {
          nickname: '다람쥐',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure velit cupiditate unde a, laudantium voluptas sit eos animi et sint esse quaerat corporis fugiat veritatis tenetur eveniet veniam enim?',
          createdAt: '2021-10-08 22:23:37',
        },
        {
          nickname: '독수리',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure velit cupiditate unde a, laudantium voluptas sit eos animi et sint esse quaerat corporis fugiat veritatis tenetur eveniet veniam enim?',
          createdAt: '2002-10-02 22:23:37',
        },
      ].map((item, i) => (
        <Comment
          key={i}
          commentContainerClassName={`${commentBoxWidth} ${commentBoxBgColor} `}
          commentContentsClassName={`${commentContentsWidth} ${commentContentsBgColor}`}
          commentContentsTitle={item.nickname}
          createdAt={item.createdAt}
        >
          <CommentBox>{item.content}</CommentBox>
        </Comment>
      ))}
    </>
  );
};

export const WithoutNickname = ({
  commentBoxWidth = 'w-8/12',
  commentBoxBgColor = 'bg-white',

  profileImageBorderRadius = 'rounded',
  profileImageMarginRight = 'mr-3',
  profileImagePadding = 'p-4',

  commentContentsWidth = 'w-2/3',
  commentContentsBgColor = 'bg-white',
}) => {
  return (
    <>
      {[
        {
          nickname: '고래',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure velit cupiditate unde a, laudantium voluptas sit eos animi et sint esse quaerat corporis fugiat veritatis tenetur eveniet veniam enim?',
          createdAt: '2022-10-02 22:23:37',
        },
        {
          nickname: '다람쥐',
          img: './images/다람쥐.png',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure velit cupiditate unde a, laudantium voluptas sit eos animi et sint esse quaerat corporis fugiat veritatis tenetur eveniet veniam enim?',
          createdAt: '2022-03-02 22:23:37',
        },
        {
          nickname: '독수리',
          img: './images/독수리.png',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure velit cupiditate unde a, laudantium voluptas sit eos animi et sint esse quaerat corporis fugiat veritatis tenetur eveniet veniam enim?',
          createdAt: '2021-10-02 22:23:37',
        },
      ].map((item, i) => (
        <Comment
          key={i}
          commentContainerClassName={`${commentBoxWidth} ${commentBoxBgColor} `}
          profileImg={item.img}
          profileClassName={`${profileImageBorderRadius}  ${profileImageMarginRight} ${profileImagePadding} w-8 h-6 mt-1`}
          commentContentsClassName={`${commentContentsWidth} ${commentContentsBgColor} `}
          createdAt={item.createdAt}
        >
          <CommentBox>{item.content}</CommentBox>
        </Comment>
      ))}
    </>
  );
};
