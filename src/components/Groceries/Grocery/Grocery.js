import React from 'react';

const Grocery = (props) => {
    return (
        <tr>
            <td>
                <input data-event="select" id="bx--checkbox" class="bx--checkbox" type="checkbox" value="green" name="checkbox" />
                <label for="bx--checkbox" class="bx--checkbox-label" aria-label="Label name"></label>
            </td>
            <td>Avocado</td>
            <td>1</td>
            <td>£1.50</td>
        </tr>
    )
}

export default Grocery