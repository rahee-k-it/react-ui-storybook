import { useCallback } from 'react';
import { useState } from 'react';
import { backgroundColors, borderRadiuses, fontColors } from '../common';
import Li from './Li';
import Tag from './Tag';

export default {
  title: 'Tag',
  component: Tag,
  argTypes: {
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
];

export const Default = ({
  tagGridCol = 'grid-cols-6',
  liBgColor = 'bg-gray-300',
  liFontColor = 'text-black',
  liBoarderRadius = 'rounded',
  liWidth = 'w-16',
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
      <Tag className={`${tagGridCol}`}>
        {infoArr.map((item) => (
          <li
            className={`p-2 border border-solid truncate text-center ${liBgColor} ${liBoarderRadius} ${liFontColor} ${liWidth} ${liBorderColor}`}
            key={item.id}
          >
            {item.contents}
          </li>
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
  tagGridCol = 'grid-cols-6',
  liBgColor = 'bg-white',
  liFontColor = 'text-black',
  liBoarderRadius = 'rounded-full',
  liWidth = 'w-16',
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
      <Tag className={`${tagGridCol}`}>
        {infoArr.map((item) => (
          <Li
            liClickedBgColor={liClickedBgColor}
            liBgColor={liBgColor}
            className={`border-solid border p-2 truncate text-center cursor-pointer ${liBgColor} ${liBoarderRadius} ${liFontColor} ${liWidth} ${liBorderColor}`}
            key={item.id}
          >
            {item.contents}
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
  tagGridCol = 'grid-cols-6',
  liBgColor = 'bg-white',
  liFontColor = 'text-black',
  liBoarderRadius = 'rounded-full',
  liWidth = 'w-16',
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
      <Tag className={`${tagGridCol}`}>
        {infoArr.map((item) => (
          <li
            className={`flex items-center border-solid border p-2 w-20 text-center cursor-pointer ${liBgColor} ${liBoarderRadius} ${liWidth} ${liFontColor} ${liBorderColor}`}
            key={item.id}
          >
            <div className="w-12 truncate">{item.contents}</div>
            <div onClick={handleDeleteBtn} className="text-sm">
              ❌
            </div>
          </li>
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
