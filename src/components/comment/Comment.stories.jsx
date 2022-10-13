import Comment from './Comment';

export default {
  title: 'Comment',
  component: Comment,
  argTypes: {
    createdAt: { control: 'date' },
    profileImg: {
      control: 'select',
      options: ['./images/고래.png', './images/독수리.png', './images/다람쥐.png', undefined],
    },
    title: { control: 'text' },
    content: { control: 'text' },
    containerClassName: { table: { disable: true } },
    profileClassName: { table: { disable: true } },
    contentsClassName: { table: { disable: true } },
  },
};

export const Default = ({ createdAt, profileImg, title, content }) => (
  // 기본
  <Comment
    profileImg={profileImg}
    title={title}
    createdAt={createdAt}
    containerClassName={`bg-white`}
    profileClassName={`rounded mr-3 p-4 w-8 h-6`}
    contentsClassName={`w-2/3 bg-white`}
  >
    <div className="py-[15px]">{content}</div>
  </Comment>
);
Default.args = {
  createdAt: '2021-10-02 22:23:37',
  profileImg: './images/독수리.png',
  title: '독수리',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure velit cupiditate unde a, laudantium voluptas sit eos animi et sint esse quaerat corporis fugiat veritatis tenetur eveniet veniam enim?',
};
