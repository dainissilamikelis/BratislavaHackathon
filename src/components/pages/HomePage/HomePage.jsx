import React, { Component } from 'react';
import BasePage from '../BasePage/BasePage';
import VisaCard, { VisaType } from '../../molecules/VisaCard/VisaCard';

class HomePage extends Component {
    state = {  }
    
    handleOpenVisa = () => {
    }

    render() { 
        return (
            <BasePage>
                <VisaCard
                    type={VisaType.work}
                    fromCountry={"Ukraine"}
                    toCountry={"France"}
                    handleClick={this.handleOpenVisa}
                />
                <VisaCard
                    type={VisaType.travel}
                    fromCountry={"Ukraine"}
                    toCountry={"France"}
                    handleClick={this.handleOpenVisa}
                />
            </BasePage>
        );
    }
}
 
export default HomePage;