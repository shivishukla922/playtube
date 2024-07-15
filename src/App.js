import "./App.css";
import Navbar from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="flex  mt-5">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
