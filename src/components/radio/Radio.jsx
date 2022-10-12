export default function Radio({ label = '', groupName = 'default', onChange=()=>{}, ...args }) {
  const { checkboxSize, checkboxColor, fontSize, fontWeight, fontColor, active } = args;
  //horizon 활성화 여부에 따라 ClassName 변경
  const direction = args['horizon'] ? 'inline mr-2.5' : 'block';

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
