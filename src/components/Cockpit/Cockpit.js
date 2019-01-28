import React from 'react';

const cockpit = (props) => {

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }

    return (
        <div className='Cockpit'>
            <h1>Hi, I'm a React app</h1>
            <p>This is really working!</p>
            <button 
            onClick={props.clicked}
            style={style}>
            Toggle persons
            </button>
        </div>
    );
};

export default cockpit;
