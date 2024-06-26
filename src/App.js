//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home';
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
