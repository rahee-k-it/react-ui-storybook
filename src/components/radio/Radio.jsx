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
  return (
    <label htmlFor={label} className={`${fontColor} ${fontWeight} ${fontSize} ${horizon ? 'inline mr-2.5' : 'block'}`}>
      <input
        type="radio"
        id={label}
        name={name}
        disabled={!active}
        onChange={onChange}
        className={`${checkboxColor} ${checkboxSize}`}
      />
      {label}
    </label>
  );
}
