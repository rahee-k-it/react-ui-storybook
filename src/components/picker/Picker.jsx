import { useRef } from 'react';
export default function Picker({
    className = '',
    onChange = (e) => { },
    ...arg
}) {

    const parsingTime = new Date().YYYYMMDDHHMMSS();
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

Date.prototype.YYYYMMDDHHMMSS = function () {
    var yyyy = this.getFullYear().toString();
    var MM = pad(this.getMonth() + 1, 2);
    var dd = pad(this.getDate(), 2);
    var hh = pad(this.getHours(), 2);
    var mm = pad(this.getMinutes(), 2)

    return `${yyyy}-${MM}-${dd} ${hh}:${mm}`;
};

function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}
