import { useCallback, useEffect } from 'react';

export default function Checkbox({ ...props }) {
  const {
    label,
    subCheckboxsControl,
    checkboxSize,
    checkboxColor,
    fontSize,
    fontWeight,
    fontColor,
    active,
  } = props;

  //subCheckboxsControl 상태가 바뀌면 상위 체크 박스의 상태도 변경되야함.
  useEffect(() => {
    if (!subCheckboxsControl) document.getElementById(label).indeterminate = false;
    else checkSubControls();
  }, [subCheckboxsControl]);

  //Checkbox 최상위 컨트롤 이벤트
  const headerHandleCheckboxChange = useCallback((e) => {
    document
      .querySelectorAll('input[type=checkbox]')
      .forEach((p) => (p.checked = e.target.checked));
  });

  //Checkbox 하위 컨트롤 이벤트
  const handleCheckboxChange = useCallback(() => {
    checkSubControls();
  });

  return (
    <div>
      <label htmlFor={label} className={`${fontColor} ${fontWeight} ${fontSize} `}>
        <input
          type="checkbox"
          id={label}
          name={label}
          disabled={!active}
          value={subCheckboxsControl}
          onChange={subCheckboxsControl ? headerHandleCheckboxChange : handleCheckboxChange}
          className={`${checkboxColor} ${checkboxSize}`}
        />
        &nbsp;{label}
      </label>
    </div>
  );
}

function checkSubControls() {
  let check = { checked: 0, unchecked: 0 };
  let label = '';
  document.querySelectorAll('input[type=checkbox]').forEach((p) => {
    //상위 체크 박스로 지정된 체크 박스를 제외하고 checked 여부 저장
    if (p.getAttribute('value') === 'true') label = p.getAttribute('name');
    else {
      if (p.checked) check['checked'] += 1;
      else check['unchecked'] += 1;
    }
  });

  if (label.length <= 0) return;

  document.getElementById(label).indeterminate = false;

  //하위 체크 박스에 따라 상위 체크 박스 상태 변경
  if (check['checked'] === 0) document.getElementById(label).checked = false;
  else if (check['unchecked'] === 0) document.getElementById(label).checked = true;
  else document.getElementById(label).indeterminate = true;
}
