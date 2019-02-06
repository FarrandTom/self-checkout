import React from 'react';

const Grocery = (props) => {
    return (
        <tr onClick={props.click}>
            <td>
                <input data-event="select" id="bx--checkbox" class="bx--checkbox" type="checkbox" value="green" name="checkbox" />
                <label for="bx--checkbox" class="bx--checkbox-label" aria-label="Label name"></label>
            </td>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            <td>£{props.price}</td>
        </tr>
    )
}

export default Grocery