import { useState, useEffect } from 'react';

const Checkbox = ({
  defaultChecked = false, // 처음부터 체크해 둘 건지 결정
  disabled = false, // 체크 박스 사용 불가
  checked: checkedProp = undefined, // 체크 박스 상태 제어(boolean 데이터가 될 경우 체크박스를 클릭하더라도 상태 변경이 불가)
  label = '', // 라벨
  className = '',
  onChange = () => {},
  ...args
}) => {
  const [checked, setChecked] = useState(defaultChecked);
  useEffect(() => {
    if (typeof checkedProp === 'boolean') setChecked(checkedProp);
  }, [checkedProp]);
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
        onClick={() => typeof checkedProp !== 'boolean' && !disabled && setChecked(!checked)}
        className={className}
        disabled={disabled}
        {...args}
      />
      {label}
    </label>
  );
};

export default Checkbox;
