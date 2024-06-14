import { useNavigate } from "react-router-dom";

const DemoList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <span>1. Full-calendar</span>
        <button onClick={() => navigate("/full-calendar")}>view</button>
      </div>
    </div>
  );
};

export default DemoList;
