import React, { Component } from 'react';
import BasePage from '../BasePage/BasePage';
import VisaCard, { VisaType } from '../../molecules/VisaCard/VisaCard';

class ListPage extends Component {
    state = {  }
    
    render() { 
        return (
            <BasePage>
                <VisaCard
                    type={VisaType.work}
                    fromCountry={"Ukraine"}
                    toCountry={"France"}
                />
                {/* <VisaCard
                    type={VisaType.travel}
                    fromCountry={"Ukraine"}
                    toCountry={"France"}
                /> */}
            </BasePage>
        );
    }
}
 
export default ListPage;