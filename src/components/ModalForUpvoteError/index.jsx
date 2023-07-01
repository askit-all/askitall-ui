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
      if (isOpen && !event.target.closest(".modal-content")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleCancel = () => {
    onClose();
  }

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          
          <div className="modal-content responsive-width-height">
          <div className="flex justify-end w-full items-center">
            <span style={{cursor:'pointer'}} onClick={handleCancel}>X</span>
          </div>
            <h3 className="flex items-center justify-center font-bold title-height">
              Error
            </h3>
            <p className="flex justify-center w-full items-center">To upvote , profile needs to be mentor profile.</p>
            <div className="flex w-full justify-center items-center mt-5">
              <button className="bg-orange-500 rounded-[30px]" style={{color:'white' , fontWeight:'600',padding:'1rem'}} onClick={onButtonClick}>Fill Details</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { ModalForUpvoteError };
