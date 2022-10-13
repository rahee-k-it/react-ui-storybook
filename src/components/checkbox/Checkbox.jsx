import React, { useCallback, useEffect, useState } from 'react';

export default function Checkbox({
  label,
  active = true,
  checkboxSize = 'scale-100',
  checkboxColor = 'accent-blue-500',
  fontSize = 'text-base',
  fontWeight = 'font-normal',
  fontColor = 'text-black',
  children,
  check = false,
  props,
}) {
  const [checked, setIsChecked] = useState(check);

  //부모의 check 상태가 바뀌면 실행
  useEffect(() => {
    setIsChecked(!check);
  }, [check]);

  const childrenWithProps = useCallback(
    React.Children.map(children, (child) => {
      // 자식 컴포넌트의 상태를 변경
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { check: !checked });
      }
      return child;
    }),
  );

  return (
    <>
      <div htmlFor={label} className={`${fontColor} ${fontWeight} ${fontSize} `}>
        <input
          type="checkbox"
          id={label}
          name={label}
          disabled={!active}
          checked={!checked}
          onChange={() => setIsChecked(!checked)}
          className={`${checkboxColor} ${checkboxSize}`}
        />
        &nbsp;{label}
      </div>
      {childrenWithProps}
    </>
  );
}
