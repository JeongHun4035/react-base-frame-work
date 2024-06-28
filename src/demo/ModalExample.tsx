import { useNavigate } from "react-router-dom";
import Button from "@/components/Button.tsx";
import Dialog from "@/components/modal/Dialog";
import "@/demo/styles/ModalExample.css";
import { useState } from "react";

// 뭐가 들어가던 호환 가능
const ModalContents = () => {
  return <div>Contents Area</div>;
};

// 클릭 이벤트 및 디자인 직접 커스텀 가능
const ModalFooter = () => {
  const buttonOneClick = () => {
    console.log("button 1 Click Event");
  };
  const buttonTwoClick = () => {
    console.log("button 2 Click Event");
  };
  return (
    <div>
      <Button name="Button 1" onClick={() => buttonOneClick} />
      <Button name="Button 2" onClick={() => buttonTwoClick} />
    </div>
  );
};

const ModalExample = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handlePopup = (show: boolean) => {
    setShow(show);
  };
  return (
    <div className="modal-example-page">
      <div className="modal-examples">
        <div>
          <Button name="Open Dialog" onClick={() => handlePopup(true)} />
          {show && (
            <Dialog
              contentChild={<ModalContents />}
              footerChild={<ModalFooter />}
              confirmButtonName="확인"
              cancelButtonName="취소"
              handleState={handlePopup}
            />
          )}
        </div>
      </div>
      <div>
        <Button name="back" onClick={() => navigate("/demo-list")} />
      </div>
    </div>
  );
};

export default ModalExample;
