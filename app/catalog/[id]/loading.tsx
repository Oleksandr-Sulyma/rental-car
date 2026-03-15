import { CircleLoader } from "react-spinners";
import css from "./CarDetails.module.css";

export default function Loading() {
  return (
    <div className="container">
      <div 
        style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          height: "80vh" 
        }}
      >
        <CircleLoader color="#3470ff" size={80} />
      </div>
    </div>
  );
}