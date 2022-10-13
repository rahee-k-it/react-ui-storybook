export default function Radio({
  label = '',
  groupName = 'default',
  onChange = () => {},
  active = true,
  checkboxSize = 'scale-100',
  checkboxColor = 'accent-blue-500',
  fontSize = 'text-base',
  fontWeight = 'font-normal',
  fontColor = 'text-black',
  horizon = false,
}) {
  //horizon 활성화 여부에 따라 ClassName 변경
  const direction = horizon ? 'inline mr-2.5' : 'block';

  return (
    <label htmlFor={label} className={`${fontColor} ${fontWeight} ${fontSize} ${direction}`}>
      <input
        type="radio"
        id={label}
        name={groupName}
        disabled={!active}
        onChange={onChange}
        className={`${checkboxColor} ${checkboxSize}`}
      />
      &nbsp;{label}
    </label>
  );
}
