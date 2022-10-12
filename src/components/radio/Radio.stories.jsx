import { accentColors, fontColors, fontSizes, fontWeights, scale } from '../common';
import Radio from './Radio';
import Button from '../button/Button';

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
    onChange: { control: '' },
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
  controls: { exclude: ['horizon', 'label', 'onChange'] },
};

export const Horizon = Template.bind({});
Horizon.args = {
  horizon: true,
  ...Default.args,
};

Horizon.parameters = {
  controls: { exclude: ['label', 'groupName', 'onChange'] },
};

export const MultiGroup = (args) => {
  return (
    <div className={`inline-grid grid-cols-4`}>
      <div>
        <Radio groupName={'Gender'} label={'Female'} {...args} />
        <Radio groupName={'Gender'} label={'Male'} {...args} />
      </div>
      <div>
        <Radio groupName={'Other'} label={'Other Group 1'} {...args} />
        <Radio groupName={'Other'} label={'Other Group 2'} {...args} />
      </div>
    </div>
  );
};

MultiGroup.args = {
  ...Default.args,
};

MultiGroup.parameters = {
  controls: { exclude: ['horizon', 'label', 'groupName', 'onChange'] },
};

export const ChangeRadio = (args) => {
  return (
    <div>
      <Radio label={'Female'} {...args} />
      <Radio label={'Male'} {...args} />
      <br /> result :<div id="result" className="inline ml-2.5"></div>
    </div>
  );
};

ChangeRadio.args = {
  horizon: false,
  onChange: (e) => {
    document.getElementById('result').innerText = e.target.id;
  },
  ...Default.args,
};

ChangeRadio.parameters = {
  controls: { exclude: ['label', 'groupName', 'horizon', 'onChange'] },
};

export const ButtonClick = (args) => {
  return (
    <div>
      <Radio label={'Female'} {...args} />
      <Radio label={'Male'} {...args} />
      <div className="my-2">
        <Button
          bgColor="bg-blue-500"
          color="text-white"
          padding="p-2"
          onClick={() => {
            //groupname을 입력하면 체크 되어 있는 값을 버튼 아래에 띄움
            const genderNodeList = document.getElementsByName(args['groupName'] ?? 'default');

            genderNodeList.forEach((node) => {
              if (node.checked) {
                document.getElementById('result').innerText = node.id;
              }
            });
          }}
        >
          확인
        </Button>
      </div>
      result :<div id="result" className="inline ml-2.5"></div>
    </div>
  );
};

ButtonClick.args = {
  horizon: false,
  ...Default.args,
};

ButtonClick.parameters = {
  controls: { exclude: ['label', 'groupName', 'horizon', 'onChange'] },
};
