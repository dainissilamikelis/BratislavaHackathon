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

class FormExample3 extends Component {
  state = {
    loading: true,
  }
  componentDidMount = () => {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {
          loading ? (
          <div style={{ margin: 'auto' }}>
            <CircularProgress style={{ width: '100px', height:'auto' }}/>
          </div>
          ) : (
            <>
            <div id="client-snackbar" style={{ display:'flex' }}>
              {/* <div style={{ minHeight: '40px'}}>
                <WarningIcon style={{ color: 'orange', lineHeight: '20px', fontSize: '20xp', margin: 'auto' }}/>
              </div> */}
              <h2 style={{ margin: 'auto', backgroundColor: 'orange', padding:'15px' }}> Please check 9th chapter "Additional information". We gave you some hints to improve it! I guess you missed them! </h2>
            </div>
            </>
          )
        }
      </div>
    );
  }
}
 
export default FormExample3;
