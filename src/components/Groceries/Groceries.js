import React from 'react';

import './Groceries.css';

import Grocery from './Grocery/Grocery';
import { Button } from 'carbon-components-react';
import { Icon } from 'carbon-components-react';

const Groceries = (props) => {
    return (
        <div className='table-button-group'>
            <div className='groceries-table'>
                <table className='bx--data-table-v2'>
                    <thead>
                        <tr>
                            <th>
                                <span className='bx--table-header-label'>
                                    Name
                                </span>
                            </th>
                            <th>
                                <span className='bx--table-header-label'>
                                    Quantity
                                </span>
                            </th>
                            <th>
                                <span className='bx--table-header-label'>
                                    Price
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.groceries.map(grocery => {
                            return <Grocery 
                            key={grocery.id}
                            name={grocery.name}
                            quantity={grocery.quantity}
                            price={grocery.price.toString()}/>
                        })}
                    </tbody>
                </table>
            </div>
            <div className='pay-now-button-container'>
                <Button
                    className='pay-now-button'>Pay now
                <Icon 
                    className='arrow-right'
                    name='icon--arrow--right'
                    fill='white'/>
                </Button>
            </div>
        </div>
        
    )
}

export default Groceries