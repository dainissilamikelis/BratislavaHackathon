import React from 'react'
import { Card  } from 'react-onsenui';

const BaseCard = ({ type, children }) => (<Card style={type}>{children}</Card>);
 
export default BaseCard;