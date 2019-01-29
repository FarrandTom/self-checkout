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
                    <Grocery/>
                    <Grocery/>
                    <Grocery/>
                </table>
            </div>
            <div className='pay-now-button'>
                <Button>Pay now! 
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