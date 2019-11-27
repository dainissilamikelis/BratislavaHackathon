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
          Our recommendation:
It seems that you have not previouslly mentioned the part about your financial situation, however, it would be beneficial to include it in more details.
Currently you mention: <span style={{ backgroundColor: 'yellow'}}> "I have some money in my bank account"  </span>
<br/>
One of the previous application mentions it like this: "Currently, I have the amount of money that allows me to go to France and back, and in case of an emergency is sufficient to cover the additional costs for travels".
          </span>
          <span> Also, you can look at other applications <a href="/"> here </a>  </span>
         </div>
      </div>
    );
  }
}
 
export default FormExample2;
