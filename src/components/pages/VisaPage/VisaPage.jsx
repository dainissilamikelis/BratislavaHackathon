import React, {Component} from 'react';
import {HorizontalStepper} from "./Stepper";
import FormExample from "../Form1";
import FormExample2 from '../Form2';
import FormExample3 from '../Form3';
import FormExample4 from '../Form4';

const stepForms = (stepIndex) => {
  if(stepIndex === 0) return (<FormExample id={stepIndex}/>);
  if(stepIndex === 1) return (<FormExample2 />)
  if(stepIndex === 2) return (<FormExample3 />)
  return <FormExample4 />
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
