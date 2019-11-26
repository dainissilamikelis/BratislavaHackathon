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
  'Married/ Civil Partner',
  'Separated',
  'Unmarried Partner',
  'Widowed/ Surviving Civil Partner',
]);

class FormExample extends Component {
  state = {
    male: false,
    female: false,
    status: 0,
  }

  handleSetGender = (male, female) => {
    this.setState({ male, female })
  }

  handleSetOption = (key, value) => {
    this.setState({ [key]: value });
}

  render() {
    const { male, female, status } = this.state;
    return (
      <div>
        <h2>Form example {this.props.id}</h2>
        <table style={{ margin: 'auto'}} >
          <tbody>
            <RowInput title="What is your name ?">
              <input style={{ padding: '10px' }}type="text" />
            </RowInput>
            <RowInput title="... and surname ?">
              <input style={{ padding: '10px' }}type="text" />
            </RowInput>
            <RowInput title=" You are ..">
                <FormControlLabel
                  control={
                    <Checkbox checked={male} onChange={() => this.handleSetGender(!male, false)} value={male} />
                  }
                  label="Male"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={female} onChange={() => this.handleSetGender(false, !female)} value={female} />
                  }
                  label="Female"
                />
            </RowInput>
              <RowInput title="Is there that special other?">
                <DropDown
                  options={Status}
                  onChange={this.handleSetOption}
                  label="status"
                  value={status}
                />
            </RowInput>
          </tbody>
        </table>
      </div>
    );
  }
}
 
export default FormExample;
