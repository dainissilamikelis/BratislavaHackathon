import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Icon from '@material-ui/core/Icon';
import WarningIcon from '@material-ui/icons/Warning';
import Checkbox from '@material-ui/core/Checkbox';
import RowInput from '../molecules/RowInput/RowInput';
import DropDown from '../atoms/DropDown/DropDown';
import { timeout } from 'q';

function SelectOption(label, value) {
  return {
      value,
      label,
  }
}

class FormExample4 extends Component {
  state = {
    loading: true,
  }
  componentDidMount = () => {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    const { loading } = this.state;
    return (
      <div style={{ margin: 'auto'}}>
        <h2>Want to receive a personal consultation:</h2>
        <ul style={{  margin: 'auto', maxWidth:'400px'}}>
          <li>90 USD (not 150 USD per application) </li>
          <li> Pay only if the application is successful</li>
        </ul>
        <h2>We have special offers to the youth organisations!</h2>
      </div>
    );
  }
}
 
export default FormExample4;
