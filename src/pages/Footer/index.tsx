import "../../styles/globals.css";
import { Link } from "react-router-dom";

export const Footer = () => {
 
  return (
    <>
      <footer className="flex flex-wrap w-full justify-center items-center gap-10">
        
          <Link to="/" >
            <div className="flex flex-col w-60 justify-center items-center mb-8 transition-transform ease-in-out duration-400 hover:scale-115">
              <a href="">
                <img
                  src="../../src/assets/studio-shibli-logo-secondary.png"
                  alt="Studio Ghibli secondary logo"
                  className="m-2 transition-transform ease-in-out duration-400 hover:scale-105"
                />
              </a>
            </div>
          </Link>
        
      </footer>
    </>
  );
};
