
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
    return (
      <>
         <div class="body-wrapper">
    <Header/>
    <Outlet/>
    <Footer/>

</div>
    
      </>
    )
  };
  
  export default MainLayout;