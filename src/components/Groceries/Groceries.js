import React from 'react';

import './Groceries.css';

import Grocery from './Grocery/Grocery';
import { Button } from 'carbon-components-react';
import { Icon } from 'carbon-components-react';

const Groceries = (props) => {
    
    let groceries = (
        <div>
            {props.groceries_array.map(grocery => {
                return <Grocery 
                name={grocery.name}
                quantity={grocery.quantity}
                price={grocery.price}/>
            })}
        </div>
    )

    return (
        <div className='table-button-group'>
            <div className='groceries-table'>
                <table className='bx--data-table-v2'>
                    <thead>
                        <tr>
                            <th>
                                <input data-event="select-all" id="bx--checkbox" className="bx--checkbox" type="checkbox" value="green" name="checkbox" />
                                <label for="bx--checkbox" className="bx--checkbox-label" aria-label="Label name"></label>
                            </th>
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
                    {groceries}
                </table>
                <div className='sub-total bx--row'>
                        <p>Sub-Total</p>
                        <p>£4.50</p>
                    </div>
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