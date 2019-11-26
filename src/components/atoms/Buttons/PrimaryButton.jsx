import React from 'react'
import { withRouter } from 'react-router-dom'
import BaseButton from './BaseButton';


export const BaseButtonStyle = {
    action: {
        backgroundColor: 'green',
        padding: '15px',
        width: '265px'
    }
}

const PrimaryButton = withRouter(({ history, label, style }) => (<BaseButton  onClick={() => { history.push('/list') }} type={style}>{label}</BaseButton>));
 
export default PrimaryButton;

 