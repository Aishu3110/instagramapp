import './App.css';
import Login from './Component/Pages/Login';
import Signup from './Component/Pages/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Component/home/Home';
import Userfulldetail from './Component/userdetail/Userfulldetail';



function App() {
  
  return (
    <>
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/userfulldetail" element={<Userfulldetail/>}></Route>
            <Route path="/userfulldetail/:id" element={<Userfulldetail/>}></Route>
          </Routes>{" "}
          {/* }/>





10:20
<Link to={`/category/${category}`}></Link */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
