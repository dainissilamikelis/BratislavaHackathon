 import React from 'react'


const RowInput = ({ title, children}) => (
    <tr>
        <th style={{ textAlign: 'Right', paddingRight: '20px'}}> {title} </th>
        <td style={{ textAlign: 'Left'}}>
            {children}
        </td>
    </tr>
);

export default  RowInput;