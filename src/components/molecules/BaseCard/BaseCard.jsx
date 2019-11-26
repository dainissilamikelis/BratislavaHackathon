import React from 'react'
import { Card  } from 'react-onsenui';

const BaseCard = ({ type, children, onClick }) => (<Card className="BaseCard" style={type} onClick={onClick}>{children}</Card>);
 
export default BaseCard;