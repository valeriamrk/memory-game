import React from "react";
import * as S from "./styles";

const MyModal = (props) => {
  const { modalActive, handleClose, children } = props;

  return (
    <div className="modalWrapper" modalActive={modalActive} onClick={() => handleClose()}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export { MyModal };
