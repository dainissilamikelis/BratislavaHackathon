import React, { Component } from 'react';
import BasePage from '../BasePage/BasePage';
import DropDown from '../../atoms/DropDown/DropDown';
import PrimaryButton, { BaseButtonStyle } from '../../atoms/Buttons/PrimaryButton';
import RowInput from '../../molecules/RowInput/RowInput';
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

function createOptions(options) {
    const newOptions = [];
    options.forEach( (o, i) => {
        newOptions.push(SelectOption(o, i))
    })

    return newOptions;

}

const GoOptions = createOptions(['-', 'Work', 'Travel']);
const CountryOptions = createOptions(['-', 'Ukraine', 'France']);
const VisitOptions = createOptions(['-', 'Friend', 'Tourist', 'Other']);
const PeriodOptions = createOptions([
    '-',
    '6 months',
    '2 years',
    '5 years',
    '10 years',
    ]);

const SpecialPeriodOptions = createOptions([
    '-',
    '1 month',
    '11 months',
    '12 months',

])
const ReasonOptions = createOptions([
    '-',
    'for permitted paid engagements',
    'for private medical treatment and English language study only',
    'for academics doing research on sabbatical leave and their accompanying child, spouse or partner'
])

class HomePage extends Component {
    state = {
        optionValue0: 0,
        optionValue1: 0,
        goOptionValue: 0,
        visitOptionValue: 0,
        reasonOptionsValue: 0,
        periodOptionValue: 0,
        modalOpen: true,
    }

    handleSetOption = (key, value) => {
         this.setState({ [key]: value });
    }
    
    render() { 
        const {
            optionValue0,
            optionValue1,
            goOptionValue,
            visitOptionValue,
            reasonOptionsValue,
            periodOptionValue,
            modalOpen,
        } = this.state;
        return (
            <BasePage>
                <h1> Hey there! </h1>
                <table style={{ margin: 'auto'}}>
                    <tbody>
                        <RowInput title="I want to go to">
                            <DropDown
                                options={CountryOptions}
                                onChange={this.handleSetOption}
                                label="optionValue0"
                                value={optionValue0}
                            />
                        </RowInput>
                        <RowInput title="I am going from">
                            <DropDown
                                options={CountryOptions}
                                onChange={this.handleSetOption}
                                label="optionValue1"
                                value={optionValue1}
                            />
                        </RowInput>
                        <RowInput title="What do you want to do ?">
                            <DropDown
                                options={GoOptions}
                                onChange={this.handleSetOption}
                                label="goOptionValue"
                                value={goOptionValue}
                            />
                        </RowInput>
                        <RowInput title="Which type of Visitor Visa are you applying for ?">
                            <DropDown
                                options={VisitOptions}
                                onChange={this.handleSetOption}
                                label="visitOptionValue"
                                value={visitOptionValue}
                            />
                        </RowInput>
                        {
                            visitOptionValue === 3 ? (
                                <RowInput title="Please specify">
                                    <input style={{ padding: '10px' }}type="text" />
                                </RowInput>
                            ) : null
                        }
                        <RowInput title="Is there a special reason ?">
                            <DropDown
                                options={ReasonOptions}
                                onChange={this.handleSetOption}
                                label="reasonOptionsValue"
                                value={reasonOptionsValue}
                            />
                        </RowInput>
                        {
                            reasonOptionsValue > 0 ? 
                            (
                                <RowInput title="You can stay for ">
                                    <p>{SpecialPeriodOptions[reasonOptionsValue].label}</p>
                                </RowInput>
                            ) : (
                                <RowInput title="How long do you want to stay ?">
                                    <DropDown
                                        options={PeriodOptions}
                                        onChange={this.handleSetOption}
                                        label="periodOptionValue"
                                        value={periodOptionValue}
                                        />
                                </RowInput>
                            )
                        }
                        <RowInput title="When do you plan to arrive?">
                            <input style={{ padding: '10px' }} type="date" />
                        </RowInput>
                        <RowInput title="When do you plan to leave?">
                            <input style={{ padding: '10px' }} type="date" />
                        </RowInput>
                    </tbody>
                </table>
                {
                        optionValue0 > 0 &&
                        optionValue1 > 0 &&
                        goOptionValue > 0 &&
                        visitOptionValue > 0 &&
                        (
                            reasonOptionsValue > 0 ||
                            periodOptionValue > 0
                        )
                    ?  (
                        <div style={{ margin: '15px'}}>
                            <PrimaryButton label="Take me there" style={BaseButtonStyle.action} />
                        </div>
                    )
                : null
                }
            </BasePage>
        );
    }
}

export default HomePage;
