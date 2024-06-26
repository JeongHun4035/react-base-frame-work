import React from "react";

interface Dialog {
  contentChild: React.ReactNode;
  footerChild?: React.ReactNode;
  useFooter?: boolean;
}

const Dialog = ({ contentChild, footerChild, useFooter }: Dialog) => {
  return (
    <div>
      <div>{contentChild}</div>
      <div>{footerChild}</div>
    </div>
  );
};

export default Dialog;
