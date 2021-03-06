import React, {Component} from 'react';
import {Button, Card, CardActions, CardContent} from '@material-ui/core/es/index';
import Webcam from 'react-webcam';
import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleOpenCamera = this.handleOpenCamera.bind(this);
  }

  handleOpenCamera() {
    this.props.setOpenCamera(!this.props.openCamera);
  }

  render() {
    const color = this.props.openCamera ? 'secondary' : 'primary';
    return (
      <Card>
        <CardActions>
          <Button variant='raised' color={color} onClick={this.handleOpenCamera}>
            Open Camera
          </Button>
        </CardActions>
        <CardContent className='center'>
          {this.props.openCamera && <Webcam/>}
        </CardContent>
      </Card>
    );
  }
}

export default Main;
