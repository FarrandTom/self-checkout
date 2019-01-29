import React from 'react';

import './Webcam.css';

import Webcam from 'react-webcam';

import { Icon } from 'carbon-components-react';
import CameraIcon from '../../assets/icons8-camera-100.png'

const webcam = () => {
    return (
        <div className='Webcam bx--grid'>
            <div className='bx--col-xs-12'>
                <Webcam 
                    width='100%'
                    height='100%'/>
            </div>
            <div className='bx--row bx--offset-xs-6'>
                <a  href='#' className='logo-container camera-logo-styling'>
                    <img src={CameraIcon} alt="Camera Icon" class="image" />
                </a>   
                <a href='#' className='logo-container restart-logo-styling'>
                <Icon 
                    name='icon--restart'
                    fill='white'/>
                </a>            
            </div>
        </div>
    )

}

export default webcam;