import { useMemo, useState, useCallback } from 'react';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
  argTypes: {
    defaultChecked: { table: { disable: true } },
    disabled: { control: 'boolean' },
    checked: { control: { type: 'select' }, options: [undefined, false, true] },
    label: { control: 'text' },
    onChange: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export const Default = (args) => <Checkbox {...args} />;
Default.args = {
  label: 'checkbox',
};
export const AllSelect = (args) => {
  const [itemsChecked, setItemsChecked] = useState([false, false, false]);
  const allItemsChecked = useMemo(() => itemsChecked.every((item) => !!item), [itemsChecked]);
  const toggleAllItems = useCallback(() => {
    setItemsChecked((itemsChecked) =>
      Array.from({ length: itemsChecked.length }, () => !allItemsChecked),
    );
  }, [allItemsChecked]);
  const toggleItem = useCallback(
    (index) => {
      const newItemsChecked = [...itemsChecked];
      newItemsChecked[index] = !newItemsChecked[index];
      setItemsChecked(newItemsChecked);
    },
    [itemsChecked],
  );
  return (
    <>
      <Checkbox label="전체 선택" defaultChecked={allItemsChecked} onChange={toggleAllItems} />
      <ul className="p-2">
        {[0, 1, 2].map((v) => (
          <li key={v}>
            <Checkbox
              label={`선택지 ${v}`}
              defaultChecked={itemsChecked[v]}
              onChange={() => toggleItem(v)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
AllSelect.parameters = {
  controls: { hideNoControlsWarning: true, include: [] },
};
