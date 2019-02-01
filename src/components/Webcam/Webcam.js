import React from 'react';

import './Webcam.css';

import Webcam from 'react-webcam';

import { Icon } from 'carbon-components-react';
import { Button } from 'carbon-components-react';

import CameraIcon from '../../assets/icons8-camera-100.png'

const webcam = () => {
    return (
        <div className='Webcam bx--grid'>
            <div className='bx--col-xs-12'>
                <Webcam 
                    width='100%'
                    height='100%'/>
            </div>
            <div className='button-group-container'>
                <div className='button-group bx--row'>
                    <Button
                        href='#'
                        kind='danger'
                        className='logo-container camera-button'>
                        <img src={CameraIcon} alt="Camera Icon" class="image" />
                    </Button>
                    <Button
                        href='#'
                        className='logo-container restart-button'>
                    <Icon 
                        name='icon--restart'
                        className='restart-logo'
                        fill='white'/>
                        </Button>   
                </div>
            </div>
        </div>
    )

}

export default webcam;