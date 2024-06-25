//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './admin/pages/Home';
import MainLayout from './admin/Layout/MainLayout';
function App() {
  return (
    <BrowserRouter>


    <Routes>
    <Route path="/" element={<MainLayout />}>
    <Route index element={<Home/>} />  
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
