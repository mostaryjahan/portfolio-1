import { CgMail } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center  p-4 h-[180px]">
  
    <nav className="grid-flow-col gap-4 sm:place-self-center md:justify-self-end">
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

    <div>
    <div className="grid-flow-col font-mon items-center">   
    <p className="font-mon text-center">Copyright © ${new Date().getFullYear()} - All right reserved by Mostary Jahan</p>
  </div>
    </div>

  </footer>
  );
};

export default Footer;


