import React from 'react'
import { Button  } from 'react-onsenui';

const BaseButton = ({ type, children, onClick }) => (<Button style={type} onClick={onClick}>{children}</Button>);
 
export default BaseButton;