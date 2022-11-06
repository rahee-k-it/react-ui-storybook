import Menu from './Menu';
import MenuDescription from './Menu.md';

export default {
  component: Menu,
  title: 'Menu',
  argTypes: {
    type: { control: 'select', options: ['hamberger', 'kebab', 'meatballs', 'doner'] },
  },
  parameters: {
    docs: { description: { component: MenuDescription } },
  },
};

export const Default = (args) => (
  <div>
    <h1 className="font-bold text-lg mb-1">기본 예시</h1>
    <Menu {...args} className="mb-2" />
    <h1 className="font-bold text-lg mb-1">선택할 수 있는 메뉴</h1>
    <div className="flex gap-2">
      <Menu type="hamberger" />
      <Menu type="kebab" />
      <Menu type="meatballs" />
      <Menu type="doner" />
    </div>
  </div>
);
Default.args = {
  type: 'hamberger',
};
