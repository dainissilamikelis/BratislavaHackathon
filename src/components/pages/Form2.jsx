import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';
import RowInput from '../molecules/RowInput/RowInput';
import DropDown from '../atoms/DropDown/DropDown';

function SelectOption(label, value) {
  return {
      value,
      label,
  }
}


function createOptions(options) {
  const newOptions = [];
  options.forEach( (o, i) => {
      newOptions.push(SelectOption(o, i))
  })

  return newOptions;

}

const Status = createOptions([
  '-',
  'Single',
  'Divorced/ Dissolved Partnership',
  'Separated',
  'Widowed',
]);

const OtherStatus = createOptions([
  '-',
  'Married/ Civil Partner',
  'Unmarried Partner',
  'Surviving Civil Partner',
]);

class FormExample2 extends Component {
  state = {
    male: false,
    female: false,
    specialOther: false,
    status: 0,
    otherStatus: 0,
    otherNationality: 0,
  }

  handleSetGender = (male, female) => {
    this.setState({ male, female })
  }

  handleSetOption = (key, value) => {
    this.setState({ [key]: value });
}

  render() {
    const { male, female, status, specialOther, otherStatus, otherNationality } = this.state;
    return (
      <div>
        <h2> Other information </h2>
        <div style={{ maxWidth: "700px", maxHeight:"600px", margin: 'auto'}}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            <span style={{ backgroundColor: 'yellow'}}> some users di it like this </span>
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </span>
         </div>
      </div>
    );
  }
}
 
export default FormExample2;
