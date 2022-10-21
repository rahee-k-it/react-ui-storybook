import {  useEffect, useState } from 'react';

export default function Checkbox({
  label,
  disabled = false,
  checkboxSize = 'scale-100',
  checkboxColor = 'accent-blue-500',
  fontSize = 'text-base',
  fontWeight = 'font-normal',
  fontColor = 'text-black',
  check = false,
  onChange =()=>{},
  ...args
}) {
  const [checked, setChecked] = useState(check);

  useEffect(() => {
    setChecked(check);
  }, [check]);

  return (
    <label
      htmlFor={label}
      className={`${fontColor} ${fontWeight} ${fontSize} inline-grid grid-flow-col auto-cols-max gap-x-1`}
    >
      <input
        type="checkbox"
        id={label}
        name={label}
        checked={checked}
        onClick={() => setChecked(!checked)}
        onChange={() =>onChange}
        className={`${checkboxColor} ${checkboxSize}`}
        {...args}
      />
      {label}
    </label>
  );
}
