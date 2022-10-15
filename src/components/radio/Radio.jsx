export default function Radio({
  label = '',
  active = true,
  name='defalut',
  checkboxSize = 'scale-100',
  checkboxColor = 'accent-blue-500',
  fontSize = 'text-base',
  fontWeight = 'font-normal',
  fontColor = 'text-black',
  onChange= (e)=>{},
  horizon = false,
}) {
  //horizon 활성화 여부에 따라 ClassName 변경
  const direction = horizon ? 'inline mr-2.5' : 'block';

  return (
    <label htmlFor={label} className={`${fontColor} ${fontWeight} ${fontSize} ${direction}`}>
      <input
        type="radio"
        id={label}
        name={name}
        disabled={!active}
        onChange={onChange}
        className={`${checkboxColor} ${checkboxSize}`}
      />
      &nbsp;{label}
    </label>
  );
}
