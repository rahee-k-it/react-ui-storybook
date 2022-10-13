import {useEffect, useState } from 'react';
import { accentColors, fontColors, fontSizes, fontWeights, scale } from '../common';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
  argTypes: {
    label: { control: 'text' },
    check: { control: 'boolean' },
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
  check: false,
  active: true,
  checkboxSize: 'scale-100',
  checkboxColor: 'accent-blue-500',
  fontSize: 'text-base',
  fontWeight: 'font-normal',
  fontColor: 'text-black',  
};
Default.parameters = {
  controls: { exclude: ['onChange'] },
};

export const AllSelect = (args) => {
  const [checked, setIsChecked] = useState();
  useEffect(() => {
    setIsChecked(args.check);
  }, [args.check]);

  return (
    <div>
      <Checkbox label={'전체'} onChange={()=>setIsChecked(!checked)} {...args}/>
      <ul className="p-2">
        {[0, 1, 2].map((v, key) => (
          <li key={key}>
            <Checkbox label={`Example ${v}`} check={checked} />
          </li>
        ))}
      </ul>
    </div>
  );
};
AllSelect.args = {
  ...Default.args,
};
AllSelect.parameters = {
  controls: { exclude: ['onChange'] },
};
