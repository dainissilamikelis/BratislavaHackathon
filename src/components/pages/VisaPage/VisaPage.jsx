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
  return ['Basic info', '...', "Submission"];
};

class VisaPage extends Component {
  state = {modalOpen: false, opened: false};

  checkModal = (idx) => {
    const steps = getSteps();
    if (idx === steps.length - 1 && !this.state.opened) {
      this.setState({modalOpen: true, opened: true});
    }
    return stepForms(idx);
  };

  render() {
    const {modalOpen} = this.state;
    return (
      <div>
        <FormModal open={modalOpen} handleClose={() => this.setState({modalOpen: false})}/>
        <HorizontalStepper stepContent={(idx) => this.checkModal(idx)} stepInfo={getSteps}/>
      </div>
    );


  }
}

export default VisaPage;
