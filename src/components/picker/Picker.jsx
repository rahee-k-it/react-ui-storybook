export default function Picker({
    backgroundColors = 'bg-white',
    borderColor = 'border-gray-300',
    fontSize = 'text-base',
    fontWeight = 'font-normal',
    fontColor = 'text-black',
    onFocus = (e) => { },
    ...arg
}) {
    const today = new Date().toISOString().slice(0, 16).replace('T', ' ').replace(/\..*/, '');
    return (
        <input
            id={arg.id ?? 'picker'}
            defaultValue={arg.type === 'date' ? today.split(' ')[0] : arg.type === 'datetime-local' ? today : today.split(' ')[1]}
            onFocus={(e) => onFocus && onFocus(e)}
            className={`        
            h-9
            px-2
            text-center
            border rounded
            ${arg.type === 'datetime-local' ? 'w-49' : 'w-36'}
            ${fontSize}
            ${fontWeight}
            ${fontColor}
            ${backgroundColors}
            ${borderColor}`}
            {...arg}
        >
        </input>

    );
}
