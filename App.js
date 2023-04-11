import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routess from "./Components/Routess";

function App() {
  return (
    <div>
      <Navbar title={"React App"} />
      <ToastContainer />
      <Routess />
    </div>
  );
}

export default App;
