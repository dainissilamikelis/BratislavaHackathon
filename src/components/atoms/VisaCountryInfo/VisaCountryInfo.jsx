import React from 'react'

const flagStyle = {
    maxHeight: '50px',
    width: 'auto',
    marginLeft: '10px',
    marginRight: '10px',
};

const headerStyle = {
    margin: 'auto',
}

const paragraphStyle = {
    margin: '0px',
    textAlign: 'center',
}

export const Countries = {
    ukraine: {
        title: 'Ukraine',
        flag: 'https://random-delete-me-pls.s3.eu-central-1.amazonaws.com/Flag_of_Ukraine.svg.svg',
    },
    france: {
        title: 'France',
        flag: 'https://random-delete-me-pls.s3.eu-central-1.amazonaws.com/1200px-Flag_of_France.svg.webp',
    }
}

const VisaCountryInfo = ({
    from,
    country,
}) => (
    <div>
        <div style={{ display: 'flex'}}>
            <h1 style={headerStyle}>{from ? 'From' : 'to'}</h1>
            <div>
                <img style={flagStyle} src={country.flag} alt={country.title} />
                <p style={paragraphStyle}>{country.title}</p>
            </div>
        </div>
    </div>
)

export default VisaCountryInfo