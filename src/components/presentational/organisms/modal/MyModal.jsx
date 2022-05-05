import React from "react";
import "./MyModal.scss";


const MyModal = (props) => {
  const { modalActive, handleClose, children, setModalActive } = props;

  

  return (
    // <div className={modalActive ? "modal active" : "modal"} modalActive={modalActive} onClick={() => setModalActive(false)}>
    <div className={modalActive ? "modal active" : "modal"} modalActive={modalActive}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}; 

export { MyModal };
