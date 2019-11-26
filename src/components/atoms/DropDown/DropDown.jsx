import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const DropDown = ({ options, onChange, value  }) => (
    <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
    > {
        options.map(o =>  <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>)
        }
    </Select>
)
 
export default DropDown;