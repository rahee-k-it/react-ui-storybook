import { accentColors, fontColors, fontSizes, fontWeights, scale } from '../common';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
  argTypes: {
    label: { control: 'text' },
    active: { control: 'boolean' },
    checkboxSize: { control: 'select', options: scale },
    checkboxColor: { control: 'select', options: accentColors },
    fontSize: { control: 'select', options: fontSizes },
    fontWeight: { control: 'select', options: fontWeights },
    fontColor: { control: 'select', options: fontColors },
  },
};

export const Default = (args) => <Checkbox {...args} />;
Default.args = {
  label: 'checkbox',
  active: true,
  checkboxSize: 'scale-100',
  checkboxColor: 'accent-blue-500',
  fontSize: 'text-base',
  fontWeight: 'font-normal',
  fontColor: 'text-black',
  check:false,
};

export const AllSelect = (args) => {
  return (
      <Checkbox        
        {...args}
      >
      {(() => {
        //스토리만을 위한 임의의 체크 박스 생성
        return [0, 1, 2].map((i, key) => {
          args['label'] = `Example ${i + 1}`;
          return <Checkbox key={key} {...args} />;
        });
      })()}
    </Checkbox>
  );
};
AllSelect.args = {
  ...Default.args,
};
