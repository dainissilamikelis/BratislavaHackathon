import React from 'react'
import BaseCard from '../BaseCard/BaseCard'

const travelDescription = "Hey! I hear you`re going to travel from Ukraine to France!";
const workDescription = "Hey! I hear you`re going to work France coming from Ukraine";

function styleType (color, variant, description) {
    return {
        variant,
        backgroundColor: color,
        description,
    }
}

export const VisaType = {
    work: styleType('red', 'Work', workDescription),
    travel: styleType('green', 'Travel', travelDescription),
}

const VisaCard = ({
    type,
    fromCountry,
    toCountry,
    desc,
}) => (
    <BaseCard type={type}> 
        <h3>{type.variant}</h3>
        <h1>{`From ${fromCountry} to ${toCountry}`}</h1>
        <p>{type.description}</p>
    </BaseCard>
)
 
export default VisaCard;