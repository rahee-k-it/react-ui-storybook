import { useCallback, useEffect, useState } from 'react';

export default function Checkbox({
  label,
  active = true,
  checkboxSize = 'scale-100',
  checkboxColor = 'accent-blue-500',
  fontSize = 'text-base',
  fontWeight = 'font-normal',
  fontColor = 'text-black',
  check = false,
  // onChange = () => {},
}) {
  const [checked, setIsChecked] = useState(check);

  useEffect(() => {
    setIsChecked(check);
  }, [check]);

  return (
    <div
      htmlFor={label}
      className={`${fontColor} ${fontWeight} ${fontSize} inline-grid grid-flow-col auto-cols-max gap-x-1`}
    >
      <input
        type="checkbox"
        id={label}
        name={label}
        disabled={!active}
        checked={checked}
        // onChange={onChange}
        onClick={() => setIsChecked(!checked)}
        className={`${checkboxColor} ${checkboxSize}`}
      />
      {label}
    </div>
  );
}
