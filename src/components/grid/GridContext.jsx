import React from 'react';

function ColumnAdd(col) {
    return (
        col.map(item => {
            return (
                <th>{item}</th>
            )
        })
    )
}

function RowAdd(cell) {
    return (
        <tr>
        {
            cell.map(item => {
                return (
                    <td>{item}</td>
                )
            })
        }
        </tr>
    )
}

export {ColumnAdd,RowAdd};