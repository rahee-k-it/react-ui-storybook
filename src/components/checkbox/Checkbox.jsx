import { useEffect, useState, useCallback } from 'react';

export default function Checkbox({
  label,
  disabled = false,
  checkboxSize = 'scale-100',
  checkboxColor = 'accent-blue-500',
  fontSize = 'text-base',
  fontWeight = 'font-normal',
  fontColor = 'text-black',
  check = false,
  onChange = () => { },
  ...args
}) {
  const [checked, setChecked] = useState(check);

  useEffect(() => {
    setChecked(check);
  }, [check]);

  const handleChange = useCallback(() => {
    setChecked(!checked); onChange(!checked);
  }, [checked])

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
        onChange={handleChange}
        className={`${checkboxColor} ${checkboxSize}`}
        {...args}
      />
      {label}
    </label>
  );
}
