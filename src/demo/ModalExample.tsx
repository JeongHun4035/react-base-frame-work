import { useNavigate } from "react-router-dom";
import Dialog from "@/components/modal/Dialog";
import { useState } from "react";

const ModalContents = () => {
  return <div>test</div>;
};

const ModalExample = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Open Dialog</button>
      {show && <Dialog contentChild={<ModalContents />} />}
      <div>
        <button onClick={() => navigate("/demo-list")}>back</button>
      </div>
    </div>
  );
};

export default ModalExample;
