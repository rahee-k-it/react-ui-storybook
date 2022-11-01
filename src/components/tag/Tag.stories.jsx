// import { useCallback } from 'react';
import { useCallback, useState } from 'react';
import { backgroundColors, borderRadiuses, fontColors } from '../common';
import Contents from './Contents';
import Tag from './Tag';

export default {
  title: 'Tag',
  component: Tag,
  argTypes: {
    isTruncate: { control: 'boolean' },
    tagWidth: { control: 'select', options: ['w-60', 'w-96', 'w-2/3', 'w-auto'] },
    liBgColor: { control: 'select', options: backgroundColors },
    liFontColor: { control: 'select', options: fontColors },
    liBoarderRadius: { control: 'select', options: borderRadiuses },
    liBorderColor: {
      control: 'select',
      options: [
        'border-transparent',
        'border-slate-300',
        'border-blue-900',
        'border-green-900',
        'border-red-900',
      ],
    },
  },
};

const infoArr = [
  { contents: 'HTML' },
  { contents: 'CSS' },
  { contents: 'JavaScript' },
  { contents: 'React' },
  { contents: `test about very long sentence` },
];

export const Default = ({
  isTruncate = true,
  tagWidth = 'w-2/3',
  liBgColor = 'bg-gray-300',
  liFontColor = 'text-black',
  liBoarderRadius = 'rounded',
  liBorderColor = 'border-transparent',
  ...args
}) => {
  const [value, setValue] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    infoArr.push({ contents: value, id: new Date() * Math.random() });
    setValue('');
  };

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <>
      <Tag className={`${tagWidth}`} {...args}>
        {infoArr.map((item, i) => (
          <Contents
            key={i}
            className={`w-20 ${liBgColor} ${liFontColor} ${liBoarderRadius} ${liBorderColor}
          `}
          >
            <span className={`h-4 ${isTruncate ? 'truncate' : 'overflow-hidden'}`}>
              {item.contents}
            </span>
          </Contents>
        ))}
      </Tag>
      <form onSubmit={onSubmit} className="absolute bottom-10">
        <input
          className={`border p-1`}
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Write plz...."
        ></input>
      </form>
    </>
  );
};

export const CheckTag = ({
  isTruncate = true,
  tagWidth = 'w-auto',
  liBgColor = 'bg-gray-300',
  liFontColor = 'text-black',
  liBoarderRadius = 'rounded',
  liBorderColor = 'border-transparent',
  liClickedBgColor = 'bg-red-300',
  ...args
}) => {
  const [value, setValue] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    infoArr.push({ contents: value, id: new Date() * Math.random() });
    setValue('');
  };

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <>
      <Tag className={`${tagWidth}`} {...args}>
        {infoArr.map((item, i) => (
          <Contents
            key={i}
            isTruncate={isTruncate}
            liClickedBgColor={liClickedBgColor}
            liBgColor={liBgColor}
            className={`${liFontColor} ${liBoarderRadius} ${liBorderColor}
          `}
          >
            <span className={`w-10 h-4 ${isTruncate ? 'truncate' : 'overflow-hidden'}`}>
              {item.contents}
            </span>
          </Contents>
        ))}
      </Tag>
      <form onSubmit={onSubmit} className="absolute bottom-10">
        <input
          className={`border p-1`}
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Write plz...."
        ></input>
      </form>
    </>
  );
};

CheckTag.argTypes = {
  liClickedBgColor: {
    control: 'select',
    options: backgroundColors,
  },
};

export const DeleteTag = ({
  tagWidth = 'w-2/3',
  liBgColor = 'bg-white',
  liFontColor = 'text-black',
  liBoarderRadius = 'rounded-full',
  liBorderColor = 'border-red-500',
  ...args
}) => {
  const [value, setValue] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    infoArr.push({ contents: value, id: new Date() * Math.random() });
    setValue('');
  };

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const handleDeleteBtn = useCallback((e) => {
    e.target.closest('li').remove();
  }, []);

  return (
    <>
      <Tag className={`${tagWidth}`} {...args}>
        {infoArr.map((item, i) => (
          <Contents
            key={i}
            className={`${liBgColor} ${liFontColor} ${liBoarderRadius} ${liBorderColor}
          `}
          >
            <span className={`h-4 mr-2`}>{item.contents}</span>
            <span onClick={handleDeleteBtn} className="text-red-600">
              X
            </span>
          </Contents>
        ))}
      </Tag>
      <form onSubmit={onSubmit} className="absolute bottom-10">
        <input
          className={`border p-1`}
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Write plz...."
        ></input>
      </form>
    </>
  );
};

DeleteTag.parameters = {
  controls: {
    exclude: ['isTruncate'],
  },
};
