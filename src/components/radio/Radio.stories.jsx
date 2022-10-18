import { accentColors, fontColors, fontSizes, fontWeights, scale } from '../common';
import Radio from './Radio';
import RadioGroup from './RadioGroup';
import Button from '../button/Button';
import { useCallback, useState } from 'react';

export default {
  component: Radio,
  title: 'Radio',
  argTypes: {
    horizon: { control: 'boolean' },
    active: { control: 'boolean' },
    checkboxSize: { control: 'select', options: scale },
    checkboxColor: { control: 'select', options: accentColors },
    fontSize: { control: 'select', options: fontSizes },
    fontWeight: { control: 'select', options: fontWeights },
    fontColor: { control: 'select', options: fontColors },
  },
};

const Template = (args) => {
  return (
    <div>
      <Radio label={'Female'} {...args} />
      <Radio label={'Male'} {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  active: true,
  checkboxSize: 'scale-100',
  checkboxColor: 'accent-blue-500',
  fontSize: 'text-base',
  fontWeight: 'font-normal',
  fontColor: 'text-black',
};
Default.parameters = {
  controls: { exclude: ['horizon', 'label', 'name', 'onChange'] },
};

export const Horizon = Template.bind({});
Horizon.args = {
  horizon: true,
  ...Default.args,
};

Horizon.parameters = {
  controls: { exclude: ['label', 'name', 'onChange'] },
};

export const MultiGroup = (args) => {
  return (
    <div className={`inline-grid grid-cols-4`}>
      <RadioGroup name="gender">
        <Radio label={'Female'} {...args} />
        <Radio label={'Male'} {...args} />
      </RadioGroup>
      <RadioGroup name="develop">
        <Radio label={'Frontend'} {...args} />
        <Radio label={'Backend'} {...args} />
        <Radio label={'FullStack'} {...args} />
      </RadioGroup>
    </div>
  );
};

MultiGroup.args = {
  ...Default.args,
};

MultiGroup.parameters = {
  controls: { exclude: ['horizon', 'label', 'name', 'onChange'] },
};

export const ChangeRadio = (args) => {
  const [selectArg, setSelectArg] = useState({ raw: '', group: '' });

  const onChange = useCallback((e) => {
    if (e.target.checked)
      setSelectArg((existingValues) => ({
        // Retain the existing values
        ...existingValues,
        // update
        raw: e.target.id,
      }));
  }, []);

  const onChangeRadio = useCallback((id) => {
    setSelectArg((existingValues) => ({
      // Retain the existing values
      ...existingValues,
      // update
      group: id,
    }));
  }, []);

  //Radio group에 event를 주는 방법과 Radio 자체에 event를 주는 방법 모두 사용
  return (
    <div className={`inline-grid grid-cols-1`}>
      <RadioGroup name={'gender'} onChangeRadio={onChangeRadio}>
        <Radio label={'Female'} {...args} />
        <Radio label={'Male'} {...args} />
        result :{selectArg.group}
      </RadioGroup>
      <br />
      <Radio label={'Frontend'} onChange={onChange} {...args} />
      <Radio label={'Backend'} onChange={onChange} {...args} />
      <Radio label={'FullStack'} onChange={onChange} {...args} />
      result :{selectArg.raw}
    </div>
  );
};

ChangeRadio.args = {
  horizon: false,
  ...Default.args,
};

ChangeRadio.parameters = {
  controls: { exclude: ['label', 'horizon', 'name', 'onChange'] },
};

export const ButtonClick = (args) => {
  const [selectArg, setSelectArg] = useState();
  const [buttonClickChange, setButtonClickChange] = useState();

  const onChange = useCallback((id) => {
    setSelectArg(id);
  }, []);

  const onClick = useCallback(() => {
    setButtonClickChange(selectArg);
  }, [selectArg]);

  return (
    <RadioGroup name={'gender'} onChangeRadio={onChange}>
      <Radio label={'Female'} {...args} />
      <Radio label={'Male'} {...args} />
      <div className="my-2">
        <Button bgColor="bg-blue-500" color="text-white" padding="g" onClick={() => onClick()}>
          확인
        </Button>
      </div>
      result : {buttonClickChange}
    </RadioGroup>
  );
};

ButtonClick.args = {
  horizon: false,
  ...Default.args,
};

ButtonClick.parameters = {
  controls: { exclude: ['label', 'horizon', 'name', 'onChange'] },
};
