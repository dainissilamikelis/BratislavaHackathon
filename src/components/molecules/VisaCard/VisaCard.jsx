import React from 'react'
import { withRouter } from 'react-router-dom'
import BaseCard from '../BaseCard/BaseCard'
import FromToFlag from '../../atoms/FromToFlag/FromToFlag';

const shortTD = 'Hey! I hear you`re going to travel from Ukraine to France! ';
const shortWD = 'Hey! I hear you`re going to work in France coming from Ukraine'; 
const travelDescription =  `This is an application to the short term travel Visa from Ukraine to France.
After submitting this form, you will need to print it and submit it at the nearest embassy.
Also, our recommendations are based on our experience, however, they are not legally binding, as we are not representatives of the aforementioned embassy.`;
const workDescription = shortWD + shortWD + shortWD + shortWD + shortWD;

function styleType (color, variant, description) {
    return {
        variant,
        style: {
            backgroundColor: color,
            cursor: 'pointer',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '10px',
            border: 'solid 1px #CCCCCC'
        },
        description,
    }
}

export const VisaType = {
    work: styleType('#F4F4F4', 'Work', travelDescription),
    travel: styleType('#D9D9D9', 'Travel', travelDescription),
}

const VisaCard = withRouter(({ history, type }) => (
    <BaseCard
        type={type.style}
        onClick={() => { history.push('/visa/travel') }}> 
        <h3>{type.variant}</h3>
        <FromToFlag />
        <p>{type.description}</p>
    </BaseCard>
));
 
export default VisaCard;