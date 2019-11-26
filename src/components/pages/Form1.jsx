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

class FormExample extends Component {
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
        <h2> Basic infromation </h2>
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
            <FormControlLabel
              control={
                <Switch
                  checked={specialOther}
                  onChange={() => this.handleSetOption('specialOther', !specialOther)}
                  value={specialOther}
                  color="primary"
                />
              }
            />
            </RowInput>
            {
              !specialOther ? (
                <RowInput title="Is there that special other?">
                  <DropDown
                    options={Status}
                    onChange={this.handleSetOption}
                    label="status"
                    value={status}
                  />
                </RowInput>
              ) : (
                <RowInput title="Please specify">
                  <DropDown
                    options={OtherStatus}
                    onChange={this.handleSetOption}
                    label="otherStatus"
                    value={otherStatus}
                  />
                </RowInput>
              )
            }
            <RowInput title="Where where you born?">
              <input style={{ padding: '10px' }}type="text" />
            </RowInput>
            <RowInput title="And that is in (country) ?">
              <input style={{ padding: '10px' }}type="text" />
            </RowInput>
            <RowInput title="And your nationality is ?">
              <input style={{ padding: '10px' }}type="text" />
            </RowInput>
            <RowInput title="Have you ever had different nationality ?">
            <FormControlLabel
              control={
                <Switch
                  checked={otherNationality}
                  onChange={() => this.handleSetOption('otherNationality', !otherNationality)}
                  value={otherNationality}
                  color="primary"
                />
              }
            />
            </RowInput>
            {
              otherNationality ? (
                <RowInput title="And that was ?">
                  <input style={{ padding: '10px' }}type="text" />
                </RowInput>
              ) : null
            }
          </tbody>
        </table>
      </div>
    );
  }
}
 
export default FormExample;
