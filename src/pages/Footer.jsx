import { CgMail } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  const handleNavClick = (id) => {
    navigate(`#${id}`);
    smoothScroll(id); 
  };


  return (
    <footer className="bg-neutral text-neutral-content items-center  p-4 h-[180px]">
  

  
    <nav className="flex gap-4 justify-center  mt-8 mx-auto">
      <a  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=new">
      <CgMail className="w-8 h-6" />
      </a>
      <a href="https://www.linkedin.com/in/your-name/">
        <FaLinkedin className="w-8 h-6"/>
      </a>
      <a href="https://github.com/mostaryjahan">
         <FaGithub className="w-8 h-6"/>
      </a>
    </nav>

    <div className="flex justify-center items-center mt-4 font-mon gap-2">
    
        <a className="cursor-pointer" onClick={() => handleNavClick("about")}>About |</a>
       
     
        <a className="cursor-pointer" onClick={() => handleNavClick("experience")}>Experience |</a>
    
      
        <a className="cursor-pointer" onClick={() => handleNavClick("project")}>Project |</a>
  
        <a className="cursor-pointer" onClick={() => handleNavClick("contact")}>Contact</a>
     
    </div>
   

    <div className="font-mon mt-4 sm:mt-8">   
    <p className="font-mon text-center sm:text-md text-xs">Copyright © ${new Date().getFullYear()} - All right reserved by Mostary Jahan</p>
  </div>
 

  </footer>
  );
};

export default Footer;


