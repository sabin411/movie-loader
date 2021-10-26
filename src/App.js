import "./App.css";
import Layout from "./HOC/Layout";
import { useSelector } from "react-redux";
function App() {
  const bgURL = useSelector((state) => state.bgImg.value);
  return (
    <div className="container">
      <img src={bgURL} alt="" className="background-image" />
      <Layout />
    </div>
  );
}

export default App;
