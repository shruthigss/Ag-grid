import {BrowserRouter, Routes,Route} from "react-router-dom";
import './App.css';
import Mainpage from "./components/Mainpage";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/table" element={<Table/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
