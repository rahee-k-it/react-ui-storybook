export default function Picker({
    className = '',
    onChange = (e) => { },
    ...arg
}) {

    const parsingTime = DateFormat(new Date());
    const today = {
        'date': parsingTime.split(' ')[0],
        'time': parsingTime.split(' ')[1],
        'datetime-local': parsingTime,
    }

    return (
        <input
            id={arg.id ?? 'picker'}
            type={arg.type ?? 'date'}
            defaultValue={today[arg.type]}
            ref={arg.refs ?? null}
            onChange={(e) => onChange && onChange(e)}
            className={`        
            h-9
            px-2
            text-center
            border rounded
            w-fit
            ${className}`}
            {...arg}
        />

    );
}

function DateFormat(date) {
    var yyyy = date.getFullYear().toString();
    var MM = pad(date.getMonth() + 1, 2);
    var dd = pad(date.getDate(), 2);
    var hh = pad(date.getHours(), 2);
    var mm = pad(date.getMinutes(), 2)

    return `${yyyy}-${MM}-${dd} ${hh}:${mm}`;
}

function pad(number, length) {
    return `${'0'.repeat(length-`${number}`.length)}${number}`;
}
