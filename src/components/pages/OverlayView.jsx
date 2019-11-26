import React, {Component} from 'react';
import './OverlayView.scss';
import Button from "@material-ui/core/Button";
import {Modal} from "@material-ui/core";

class OverlayView extends Component {
  state = {
    counter: 0
  };

  render() {
    const {counter} = this.state;
    return (
      <div className='overlay'>
        <Button onClick={() => this.setState({counter: counter + 1})}>Next</Button>
        </div>
    );
  }
}

export default OverlayView;
