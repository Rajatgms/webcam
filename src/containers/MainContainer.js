import setOpenCamera from '../actions/cameraButtonAction';
import {connect} from 'react-redux';
import Main from '../components/Main';

const mapStateToProps = state => ({
  openCamera: state.cameraButton.openCamera
});

const mapDispatchToProps = (dispatch) => {
  return {
    setOpenCamera: (value) => dispatch(setOpenCamera(value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);