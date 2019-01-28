import React from 'react';
import './Header.scss';

import { Icon } from 'carbon-components-react'

const header = () => {
    return (
        <div className='Header'>
        <Icon 
            name='icon--favorite--outline'/>
            <header>
                <p>Self-Checkout</p>
            </header>
        </div>
    )
}

export default header; 