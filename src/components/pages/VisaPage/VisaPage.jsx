import React, {Component} from 'react';
import {HorizontalStepper} from "./Stepper";
import FormExample from "../Form";

const stepForms = (stepIndex) => {
  return (<FormExample id={stepIndex}/>);
};

const getSteps = () => {
  return ['Basic info', 'Additional info', 'Verification', "Submission"];
};

class VisaPage extends Component {
  state = {activeForm: 0};

  render() {
    const {activeForm} = this.state;
    return (
      <HorizontalStepper stepContent={stepForms} stepInfo={getSteps}/>
    );


  }
}

export default VisaPage;
