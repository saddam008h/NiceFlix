import { Link } from "react-router-dom";
import { useEffect } from "react";
import { BiHomeSmile } from "@react-icons/all-files/bi/BiHomeSmile";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const scrolled = window.scrollY || document.documentElement.scrollTop;

      if (scrolled > 20) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      className={`z-50 flex fixed left-0 right-0  bg-transparent px-3 xl:px-8 py-2 border-r border-card`}
    >
      <div className="flex p-3 mr-auto font-semibold text-lg text-white ">
        <div className="text-red-500 mr-10 font-extrabold text-3xl">NiceFlix</div>
        {/* Home */}
        <div className="flex space-x-8">
          <button className="hover:text-gray-300">
            <Link to="/">
              <p>Home</p>
            </Link>
          </button>
          {/* Movies */}
          <button aria-label="Movies" className="hover:text-gray-300">
            <Link to="/movies" aria-label="Movies">
              Movies
            </Link>
          </button>
          {/* Shows */}
          <button className="hover:text-gray-300">
            <Link to="/shows" aria-label="Shows">
              TV Shows
            </Link>
          </button>
          {/* Search */}
        </div>
      </div>
      <button id="searchButton" className="text-3xl mr-5 mt-2 ">
        <BiSearch />
      </button>
      <Link to="/account">
        <button className="p-2 w-24 h-10 text-white font-bold rounded-md mt-3 bg-red-600 hover:bg-red-700">
          SiGN IN
        </button>
      </Link>
    </div>
  );
};
export default Navbar;
