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
    onChange: { table: { disable: true } },
  },
};

const Template = (args) => {
  return (
    <RadioGroup name="gender" >
      <Radio label={'Female'} {...args} />
      <Radio label={'Male'} {...args} />
    </RadioGroup>
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
  controls: { exclude: ['horizon', 'label', 'name'] },
};

export const Horizon = Template.bind({});
Horizon.args = {
  horizon: true,
  ...Default.args,
};

Horizon.parameters = {
  controls: { exclude: ['label', 'name'] },
};

export const MultiGroup = (args) => {
  return (
    <div className={`inline-grid grid-cols-4`}>
      <RadioGroup name="gender">
        <Radio label="Female" {...args} />
        <Radio label="Male" {...args} />
      </RadioGroup>
      <RadioGroup name="develop">
        <Radio label="Frontend" {...args} />
        <Radio label="Backend" {...args} />
        <Radio label="FullStack" {...args} />
      </RadioGroup>
    </div>
  );
};

MultiGroup.args = {
  ...Default.args,
};

MultiGroup.parameters = {
  controls: { exclude: ['horizon', 'label', 'name'] },
};

export const ChangeRadio = (args) => {
  const [selectedRadioID, setselectedRadioID] = useState({ raw: '', group: '' });

  const onChange = useCallback((e) => {
    if (e.target.checked)
      setselectedRadioID((existingValues) => ({
        // Retain the existing values
        ...existingValues,
        // update
        raw: e.target.id,
      }));
  }, []);

  const onChangeRadio = useCallback((id) => {
    setselectedRadioID((existingValues) => ({
      // Retain the existing values
      ...existingValues,
      // update
      group: id,
    }));
  }, []);

  //Radio group에 event를 주는 방법과 Radio 자체에 event를 주는 방법 모두 사용
  return (
    <div className={`inline-grid grid-cols-1`}>
      <RadioGroup name="gender" onChangeRadio={onChangeRadio}>
        <Radio label="Female" {...args} />
        <Radio label="Male" {...args} />
        result :{selectedRadioID.group}
      </RadioGroup>
      <br />
      <Radio label="Frontend" onChange={onChange} {...args} />
      <Radio label="Backend" onChange={onChange} {...args} />
      <Radio label="FullStack" onChange={onChange} {...args} />
      result :{selectedRadioID.raw}
    </div>
  );
};

ChangeRadio.args = {
  horizon: false,
  ...Default.args,
};

ChangeRadio.parameters = {
  controls: {
    exclude: ['label', 'horizon', 'name', 'onChange'],
  },
};

ChangeRadio.argTypes = {
  onChange: { table: { disable: false } },
};

export const ButtonClick = (args) => {
  const [selectRadioID, setSelectRadioID] = useState();
  const [buttonClickChange, setButtonClickChange] = useState();

  const onChange = useCallback((id) => {
    setSelectRadioID(id);
  }, []);

  const onClick = useCallback(() => {
    setButtonClickChange(selectRadioID);
  }, [selectRadioID]);

  return (
    <RadioGroup name="gender" onChangeRadio={onChange}>
      <Radio label="Female" {...args} />
      <Radio label="Male" {...args} />
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
  controls: { exclude: ['label', 'horizon', 'name'] },
};
