import {OPEN_CAMERA} from '../reducers/cameraButtonReducer';

const setOpenCamera = value => {
    return {type: OPEN_CAMERA, payload: value};
};

export default setOpenCamera;