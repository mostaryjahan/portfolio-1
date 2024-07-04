import About from "../pages/About.jsx";
import Banners from "../pages/Banners.jsx";
import ContactCard from "../pages/ContactCard.jsx";
import Experience from "../pages/Experience.jsx";
import Project from "../pages/Project.jsx";

const Home = () => {
    return (
        <div id="home" className=" mx-auto max-w-7xl md:p-0 p-2">
            {/* <Nav></Nav> */}
            <Banners></Banners>           
            <About></About> 
            <Experience></Experience> 
            <Project></Project>                
            <ContactCard></ContactCard>
           
           
        </div>
    );
};

export default Home;