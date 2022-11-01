import { useCallback } from 'react';
import { useState } from 'react';
import { backgroundColors, borderRadiuses, fontColors } from '../common';
import Li from './Li';
import Tag from './Tag';

export default {
  title: 'Tag',
  component: Tag,
  argTypes: {
    isTruncate: { control: 'boolean' },
    tagWidth: { control: 'select', options: ['w-60', 'w-96', 'w-2/3', 'w-auto'] },
    tagGridCol: {
      control: 'select',
      options: ['grid-cols-2', 'grid-cols-4', 'grid-cols-6', 'grid-cols-8', 'grid-cols-10'],
    },
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
  { contents: 'HTML', id: new Date() * Math.random() },
  { contents: 'CSS', id: new Date() * Math.random() },
  { contents: 'JavaScript', id: new Date() * Math.random() },
  { contents: 'React', id: new Date() * Math.random() },
  { contents: `test about very long sentence`, id: new Date() * Math.random() },
];

export const Default = ({
  isTruncate = true,
  tagWidth = 'w-auto',
  tagGridCol = 'grid-cols-6',
  liBgColor = 'bg-gray-300',
  liFontColor = 'text-black',
  liBoarderRadius = 'rounded',
  liBorderColor = 'border-transparent',
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
      <Tag className={`${tagGridCol} ${tagWidth}`}>
        {infoArr.map((item) => (
          <Li
            className={`${liBgColor} ${liBoarderRadius} ${liFontColor} ${liBorderColor}`}
            key={item.id}
          >
            <span className={`h-4 ${isTruncate ? 'truncate' : 'overflow-hidden'}`}>
              {item.contents}
            </span>
          </Li>
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
  tagGridCol = 'grid-cols-6',
  liBgColor = 'bg-white',
  liFontColor = 'text-black',
  liBoarderRadius = 'rounded-full',
  liBorderColor = 'border-red-300',
  liClickedBgColor = 'bg-red-300',
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
      <Tag className={`${tagGridCol} ${tagWidth}`}>
        {infoArr.map((item) => (
          <Li
            liClickedBgColor={liClickedBgColor}
            liBgColor={liBgColor}
            className={`${liBgColor} ${liBoarderRadius} ${liFontColor} ${liBorderColor}`}
            key={item.id}
          >
            <span className={`h-4 ${isTruncate ? 'truncate' : 'overflow-hidden'}`}>
              {item.contents}
            </span>
          </Li>
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
  isTruncate = true,
  tagWidth = 'w-auto',
  tagGridCol = 'grid-cols-6',
  liBgColor = 'bg-white',
  liFontColor = 'text-black',
  liBoarderRadius = 'rounded-full',
  liBorderColor = 'border-red-300',
}) => {
  const [value, setValue] = useState('');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      infoArr.push({ contents: value, id: new Date() * Math.random() });
      setValue('');
    },
    [value],
  );

  const onChange = useCallback((e) => {
    const value = e.target.value;
    setValue(value);
  }, []);

  const handleDeleteBtn = useCallback((e) => {
    e.target.closest('li').remove();
  }, []);

  return (
    <>
      <Tag className={`${tagGridCol} ${tagWidth}`}>
        {infoArr.map((item) => (
          <Li
            className={`${liBgColor} ${liBoarderRadius} ${liFontColor} ${liBorderColor}`}
            key={item.id}
          >
            <span className={`h-4 w-5/6 ${isTruncate ? 'truncate' : 'overflow-hidden'}`}>
              {item.contents}
            </span>
            <span onClick={handleDeleteBtn} className="text-sm mx-2">
              X
            </span>
          </Li>
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
