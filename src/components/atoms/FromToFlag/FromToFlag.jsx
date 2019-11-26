import React from 'react'
import VisaCountryInfo, { Countries } from '../VisaCountryInfo/VisaCountryInfo'


const FromToFlag = () => (
    <div style={{ display: 'flex'}}>
        <VisaCountryInfo country={Countries.ukraine} from/>
        <VisaCountryInfo country={Countries.france}/>
    </div>
);

export default FromToFlag;