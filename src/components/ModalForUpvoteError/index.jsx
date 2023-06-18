import "../../styles/modal.css";
import { useEffect } from "react";
const ModalForUpvoteError = ({
  isOpen,
  errorMessage,
  onClose,
  onButtonClick,
}) => {

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (isOpen && !event.target.closest('.modal-content')) {
            onClose();
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isOpen, onClose]);
    

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content responsive-width-height">
            <h3 className="flex items-center justify-center font-bold title-height">Error</h3>
            <p>An error occurred. Please fill in the details.</p>
            <button onClick={onButtonClick}>Fill Details</button>
          </div>
        </div>
      )}
    </>
  );
};

export { ModalForUpvoteError };

