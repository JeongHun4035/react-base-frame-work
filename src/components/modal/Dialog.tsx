import React from "react";
import "@/demo/styles/modal/Dialog.css";
import { FaWindowClose } from "react-icons/fa";
interface Dialog {
  width?: string;
  height?: string;
  contentChild: React.ReactNode;
  footerChild?: React.ReactNode;
  confirmButtonName: string;
  cancelButtonName: string;
  useFooter?: boolean;
  handleState: (show: boolean) => void;
  useConfirmEvent?: () => void;
  useCancelEvent?: () => void;
}

const Dialog = ({
  width = "600px",
  height = "600px",
  contentChild,
  footerChild,
  confirmButtonName,
  cancelButtonName,
  useFooter,
  handleState,
  useConfirmEvent,
  useCancelEvent,
}: Dialog) => {
  return (
    <div className="dialog-area">
      <div className="dialog-container" style={{ width, height }}>
        <div className="dialog-header">
          <h3>title</h3>
          <FaWindowClose
            className="close-button"
            onClick={() => handleState(false)}
          />
        </div>
        <div>{contentChild}</div>
        <div>
          {(useFooter || footerChild) && <div>{footerChild}</div>}
          {!(useFooter || footerChild) && (
            <div className="dialog-footer">
              <button
                className="confirm-button"
                onClick={() => useConfirmEvent}
              >
                {confirmButtonName}
              </button>
              <button className="cancel-button" onClick={() => useCancelEvent}>
                {cancelButtonName}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
