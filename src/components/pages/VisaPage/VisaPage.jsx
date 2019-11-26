import React, {Component} from 'react';
import {HorizontalStepper} from "./Stepper";
import FormExample from "../Form";
import {FormModal} from "../../molecules/Modal/FormModal";

const stepForms = (stepIndex) => {
  return (<FormExample id={stepIndex}/>);
};

const getSteps = () => {
  return ['Basic info', 'Additional info', '...', "Submission"];
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
