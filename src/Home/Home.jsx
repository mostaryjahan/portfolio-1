import About from "../pages/About.jsx";
import Banners from "../pages/Banners.jsx";
import ContactCard from "../pages/ContactCard.jsx";
import Experience from "../pages/Experience.jsx";
import Footer from "../pages/Footer.jsx";
import Nav from "../pages/Nav.jsx";
import Project from "../pages/Project.jsx";

const Home = () => {
    return (
        <div className=" mx-auto max-w-7xl md:p-0 p-2">
            <Nav></Nav>
            <Banners></Banners>
            <Experience></Experience>
            <Project></Project>
            <About></About> 
            <ContactCard></ContactCard>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;