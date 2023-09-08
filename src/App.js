import './App.css';
import Login from './Component/Pages/Login';
import Signup from './Component/Pages/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Component/home/Home';


function App() {
  
  return (
    <>
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home/>}></Route>
          </Routes>{" "}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
