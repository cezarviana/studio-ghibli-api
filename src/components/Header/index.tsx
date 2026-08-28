import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <Link
          to="/"
          className="text-3xl m-8 w-auto font-bold inline-block transition-transform ease-in-out duration-400 hover:scale-105 "
          aria-label="back to home"
        >
          <img
            src="../../src/assets/studio-ghibli.png"
            alt="Studio Ghibli logo"
            className="w-70"
          />
        </Link>

      </header>
    </>
  );
};
