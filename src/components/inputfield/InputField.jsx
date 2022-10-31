export default function InputField({
  disabled = true,
  placeHolder = '',
  backgroundColors = 'bg-white',
  borderColor = 'border-gray-300',
  borderFocusColor = '',
  underline = false,
  type = 'text',
  fontSize = 'text-base',
  fontWeight = 'font-normal',
  fontColor = 'text-black',
}) {
  return (
    <input
      type={type ?? 'text'}
      placeholder={placeHolder}
      disabled={!disabled}
      className={`        
      h-9
      pl-2
      ${fontSize}
      ${fontWeight}
      ${fontColor}
      ${backgroundColors}
      ${borderColor}
      ${borderFocusColor}
      ${underline ? 'border-b-2' : 'border rounded'}
      focus:outline-none 
      ${underline ? 'focus-within:border-blue-500' : ' focus:ring-1' } `}
    />
  );
}
