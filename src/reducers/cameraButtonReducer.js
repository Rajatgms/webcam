export const OPEN_CAMERA = 'OPEN_CAMERA';

const cameraButton = (state = {openCamera: false}, action) => {
  switch (action.type) {
    case OPEN_CAMERA:
      return {openCamera: action.payload};
    default:
      return state;
  }
};

export default cameraButton;

