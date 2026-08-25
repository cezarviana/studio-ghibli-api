import { Link } from "react-router-dom";
import "../../styles/globals.css";

export const Header = () => {
  return (
    <>
      <header>
        <Link
          to="/"
          className="text-3xl m-10 w-auto font-bold inline-block transition-transform ease-in-out duration-400 hover:scale-115 "
          aria-label="voltar para a home"
        >
          <h1 className="text-white">Studio Ghibli</h1>
        </Link>
      </header>
    </>
  );
};
