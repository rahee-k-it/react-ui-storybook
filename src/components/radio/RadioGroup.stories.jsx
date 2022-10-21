import Radio from './Radio';
import RadioGroup from './RadioGroup';

export default {
  component: RadioGroup,
  title: 'RadioGroup',
  argTypes: {
    label: { control: 'text' },
    name: { table: { disable: true } },
    disabled: { control: 'boolean' },
    onChange: { table: { disable: true } },
  },
};

export const Default = (args) => {
  return (
    <RadioGroup {...args} onChange={(value) => console.log(value)}>
      <Radio label="사과" value="apple" />
      <Radio label="바나나" value="banna" />
      <Radio label="사이다" value="cider" disabled />
    </RadioGroup>
  );
};
Default.args = {
  label: '과일',
  name: 'fruit',
  disabled: false,
};
