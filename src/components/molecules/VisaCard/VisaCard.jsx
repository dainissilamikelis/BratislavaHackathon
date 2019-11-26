import React from 'react'
import { withRouter } from 'react-router-dom'
import BaseCard from '../BaseCard/BaseCard'
import FromToFlag from '../../atoms/FromToFlag/FromToFlag';

const shortTD = 'Hey! I hear you`re going to travel from Ukraine to France! ';
const shortWD = 'Hey! I hear you`re going to work in France coming from Ukraine'; 
const travelDescription = shortTD + shortTD + shortTD + shortTD + shortTD;
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
    work: styleType('#F4F4F4', 'Work', workDescription),
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