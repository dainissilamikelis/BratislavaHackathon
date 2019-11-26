import React, { Component } from 'react';
import BasePage from '../BasePage/BasePage';
import DropDown from '../../atoms/DropDown/DropDown';
import PrimaryButton, { BaseButtonStyle } from '../../atoms/Buttons/PrimaryButton';
import {TransitionsModal} from "../../molecules/Modal/Modal";

function SelectOption(label, value) {
    return {
        value,
        label,
    }
}

const titleStyle = {
    marginRight: '15px',
}
const GoOptions = [SelectOption('-', 0), SelectOption('Work', 1), SelectOption('Travel', 2)];
const CountryOptions = [SelectOption('-', 0), SelectOption('Ukraine', 1), SelectOption('France', 2)];

class HomePage extends Component {
    state = {
        hasDoOption0: false,
        hasDoOption1: false,
        hasGoOption: false,
        optionValue0: 0,
        optionValue1: 0,
        goOptionValue: 0,
        modalOpen: true,
    }


    handleSetDoOption0 = (value) => {
        const { hasDoOption0: setOption } = this.state;
        this.setState({ hasDoOption0: !setOption , optionValue0: value })
    }

    handleSetDoOption1 = (value) => {
        const { hasDoOption1: setOption } = this.state;
        this.setState({ hasDoOption1: !setOption, optionValue1: value })
    }

    handleSetGoOption = (value) => {
        const { hasGoOption: setOption } = this.state;
        this.setState({ hasGoOption: !setOption, goOptionValue: value })
    }
    
    render() { 
        const {
            hasDoOption0,
            hasDoOption1,
            hasGoOption,
            optionValue0,
            optionValue1,
            goOptionValue,
            modalOpen,
        } = this.state;
        return (
            <BasePage>
                <TransitionsModal open={modalOpen} handleClose={()=>this.setState({modalOpen: false})} />
                <h1> Hey there! </h1>
                <h2> Where do you want to go?</h2>
                <div>
                    <h3 style={titleStyle}> I want to go to the </h3>
                    <div>
                        <DropDown
                            options={CountryOptions}
                            onChange={this.handleSetDoOption0}
                            value={optionValue0}
                        />
                    </div>
                </div>
                <div>
                    <h3 style={titleStyle}>and I am going from the </h3>
                    <div>
                        <DropDown
                            options={CountryOptions}
                            onChange={this.handleSetDoOption1}
                            value={optionValue1}
                        />
                    </div>
                </div>
                {
                    hasDoOption0 > 0 && hasDoOption1 > 0 ? (
                        <div>
                            <h3> and I want to </h3>
                                <DropDown
                                options={GoOptions}
                                onChange={this.handleSetGoOption}
                                value={goOptionValue}
                            />
                        </div>
                    ) : null
                }
                {
                    hasGoOption ? (
                        <div style={{ margin: '15px'}}>
                            <PrimaryButton label="Take me there" style={BaseButtonStyle.action} />
                        </div>
                    ) : null
                }
            </BasePage>
        );
    }
}

export default HomePage;
