import '/src/CSS/Modal.css'
import PropTypes from 'prop-types';
const Modal = ({handleDeleteTrue, handleDeleteFalse, message }) => {
    return (
        <>
            <div className='modal'>
                <div className='modal-content'>
                    <p className='modal-description '>{message}</p>
                </div>
                <div className='modal-button-wrapper'>
                     <button className='modal-button modal-cancel' onClick={handleDeleteFalse}>Cancel</button>
                    <button className='modal-button modal-delete' onClick={handleDeleteTrue}>Delete</button>
                </div>  
            </div>
        </>
    );
};

Modal.propTypes = {
  handleDeleteTrue: PropTypes.func.isRequired, 
  handleDeleteFalse: PropTypes.func.isRequired, 
  message: PropTypes.string.isRequired
};

export default Modal