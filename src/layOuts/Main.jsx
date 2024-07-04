import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../pages/Footer";

const Main = () => {
    const location = useLocation();
    const navigate = useNavigate();

  

    useEffect(() => {
        navigate("#home", { replace: true });
      }, [navigate]);


  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

    return (
        <div className="">
            <div className="mx-auto max-w-7xl">
            {/* <Nav></Nav> */}
            <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
           
        </div>
    );
};

export default Main;