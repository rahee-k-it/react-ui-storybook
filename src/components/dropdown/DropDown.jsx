export default function DropDown({
  disabled = false,
  backgroundColors = 'bg-white',
  borderColor = 'border-gray-300',
  borderFocusColor = '',
  underline = false,
  fontSize = 'text-base',
  fontWeight = 'font-normal',
  fontColor = 'text-black',
  onChange = (e) => { },
  children
}) {
  return (
    <select
      name="selectList"
      id="selectList"
      disabled={disabled}
      onChange={(e) => onChange && onChange(e)}
      className={`        
          h-9
          pl-1
          ${fontSize}
          ${fontWeight}
          ${fontColor}
          ${backgroundColors}
          ${borderColor}
          ${borderFocusColor}
          ${underline ? 'border-b-2' : 'border rounded'}
          focus:outline-none 
          ${underline ? 'focus-within:border-blue-500' : ' focus:ring-1'} `}
    >
      {children}
    </select>
  );
}
