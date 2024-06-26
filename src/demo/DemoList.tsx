import { useNavigate } from "react-router-dom";
import "@/demo/styles/Demo.css";
const DemoList = () => {
  const navigate = useNavigate();
  return (
    <div className="demo-wrapper">
      <div className="demo-items">
        <span>1. Full-calendar</span>
        <button onClick={() => navigate("/full-calendar")}>view</button>
      </div>
      <div className="demo-items">
        <span>2. React-Beautiful-Drag-and-Drop</span>
        <button onClick={() => navigate("/simple-drag-and-drops")}>view</button>
      </div>
      <div className="demo-items">
        <span>3. Modals</span>
        <button onClick={() => navigate("/modals")}>view</button>
      </div>
    </div>
  );
};

export default DemoList;
