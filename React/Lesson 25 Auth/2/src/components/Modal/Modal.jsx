import React, { useRef } from 'react'

const Modal = ({closeModal, handleClickOutside, children}) => {
    const modalRef = useRef(null);

const handleClickOutside = (e) => { 
    if (modalRef.current && modalRef.current === e.target) {
        closeModal(false)
    }
    }

  return (
    <div className="modal" ref={modalRef} onClick={handleClickOutside}>
        <div className="content">
            {children}
        </div>
    </div>
  )
}

export default Modal
