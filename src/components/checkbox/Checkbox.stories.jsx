import { accentColors, fontColors, fontSizes, fontWeights, scale } from '../common';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
  argTypes: {
    label: { control: 'text' },
    subCheckboxsControl: { control: 'boolean' },
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
};
Default.parameters = {
  controls: { exclude: ['subCheckboxsControl'] }, 
};

export const AllSelect = (args) => {
  return (
    <div>
      <Checkbox {...args} />
      {(() => {
        //스토리만을 위한 임의의 체크 박스 생성
        return [1, 2, 3].map((i) => {
          args['value'] = false;
          args['subCheckboxsControl'] = false;
          args['label'] = `Example ${i}`;

          return <Checkbox {...args} />;
        });
      })()}
    </div>
  );
};
AllSelect.args = {
  subCheckboxsControl: true,
  ...Default.args,
};
