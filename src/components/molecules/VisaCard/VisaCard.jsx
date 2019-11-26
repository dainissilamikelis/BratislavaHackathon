import React from 'react'
import BaseCard from '../BaseCard/BaseCard'

const travelDescription = "Hey! I hear you`re going to travel from Ukraine to France!";
const workDescription = "Hey! I hear you`re going to work France coming from Ukraine";

function styleType (color, variant, description) {
    return {
        variant,
        style: {
            backgroundColor: color,
            cursor: 'pointer',
        },
        description,
    }
}

export const VisaType = {
    work: styleType('red', 'Work', workDescription),
    travel: styleType('green', 'Travel', travelDescription),
}

const VisaCard = ({ type, fromCountry, toCountry }) => (
    <BaseCard
        type={type.style}
    > 
        <h3>{type.variant}</h3>
        <h1>{`From ${fromCountry} to ${toCountry}`}</h1>
        <p>{type.description}</p>
    </BaseCard>
);
 
export default VisaCard;