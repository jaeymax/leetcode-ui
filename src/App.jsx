import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProblemsListPage from "./pages/ProblemsList";
import ProblemPage from "./pages/Problem";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginScreen from "./pages/Login";
import RegisterScreen from "./pages/Register";

function App() {
  const [count, setCount] = useState(0);

  return (

      <BrowserRouter>
         <Routes>
            <Route path="/" element = {<ProblemsListPage/>} />
            <Route path = '/login' element = {<LoginScreen/>} />
            <Route path = 'register' element = {<RegisterScreen/>}/>
            <Route path = '/problems/:id' element = {<ProblemPage/>} />
         </Routes>
      </BrowserRouter>
     
  );
}

export default App;
