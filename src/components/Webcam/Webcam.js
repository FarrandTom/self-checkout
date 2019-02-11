import React, { Component } from 'react';
import axios from 'axios';

import './Webcam.css';

import Webcam from 'react-webcam';

import { Button } from 'carbon-components-react';

import CameraIcon from '../../assets/icons8-camera-100.png'

class WebcamCapture extends Component {

    state = {
            imageData: null,
            image_name: "",
            saveImage: false
    }

    setRef = webcam => {
        this.webcam = webcam;
      };
    
    captureHandler = () => {
        const imageSrc = this.webcam.getScreenshot();
        this.setState({
            imageData: imageSrc
        })
        axios.post('http://localhost:5000/detection', imageSrc)
            .then(response => {
                console.log(response);
            });   
    };
    
    render (){

    return (
        <div className='Webcam bx--grid'>
            <div className='bx--col-xs-12'>
                <Webcam 
                    ref={this.setRef}
                    width='100%'
                    height='100%'/>
            </div>
            <div className='button-group-container'>
                <div className='button-group bx--row'>
                    <Button
                        kind='danger'
                        className='logo-container camera-button'>
                        <img onClick={this.captureHandler} src={CameraIcon} alt="Camera Icon" class="image" />
                    </Button>
                </div>
            </div>
        </div>
    );
    }
}

export default WebcamCapture;