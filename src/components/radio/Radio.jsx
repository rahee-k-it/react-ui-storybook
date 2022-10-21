export default function Radio({
  name,
  value,
  disabled,
  groupDisabled,
  onChange,
  label = '',
  checkboxSize = 'scale-100',
  checkboxColor = 'accent-blue-500',
  fontSize = 'text-base',
  fontWeight = 'font-normal',
  fontColor = 'text-black',
  horizon = false,
  ...args
}) {
  return (
    <label
      className={`${fontColor} ${fontWeight} ${fontSize} ${horizon ? 'inline mr-2.5' : 'block'}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        disabled={disabled || groupDisabled}
        className={`${checkboxColor} ${checkboxSize}`}
        onChange={(e) => onChange && onChange(e.target.value)}
        {...args}
      />
      {label}
    </label>
  );
}
