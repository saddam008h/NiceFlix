import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { useSelector } from "react-redux";
const Navbar = () => {
  const searchBarRef = useRef();
  const searchInputRef = useRef();
  const [isClicked, setIsClicked] = useState(false);
  const [showSearchIcon, setShowSearchIcon] = useState(false);
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lastPage, setLastPage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();
  const [userName, setUserName] = useState("");

  const user = useSelector((state) => state.user.user);
  //just add search icon at home not at login

  useEffect(() => {
    if (location && !location.pathname.includes("/search")) {
      setLastPage(location.pathname);
    }
    //extra
    setIsClicked(false);
  }, [location.pathname]);
  console.log('her is path',location.pathname)

  //searching
  // Handle Search Params
  const handleSearchParam = (e) => {
    const term = e.target.value;
    if (term) {
      navigate({
        pathname: "/search",
        search: `?q=${term}`,
      });
    }
    // Go back to previous page
    if (!term) {
      navigate(lastPage);
      setIsInputOpen(false);
    }
  };

  useEffect(() => {
    if (!isInputOpen) {
      navigate(lastPage);
    }
  }, [isInputOpen]);

  useEffect(() => {
    

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {

    const navbar = document.getElementById("navbar");
    const scrolled = window.scrollY || document.documentElement.scrollTop;
    if((location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/shows'))
    {
      if (scrolled > 20) {
        navbar.classList.add("navbar-scrolled");
      }else{
        navbar.classList.remove("navbar-scrolled");
      }

    }else {
      navbar.classList.add("navbar-scrolled");
    }

  };


  const handleMenuClick = () => {
    if (isClicked) setIsClicked(false);
    else setIsClicked(true);
  };

  //search box

  const handleSearchButtonClick = () => {
    setIsInputOpen(true);
  };

  const handleClickOutside = (e) => {
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(e.target) &&
      e.target.id !== "searchButton" &&
      e.target.id !== "searchIcon" &&
      searchInputRef.current.value == ""
    ) {
      setIsInputOpen(false);
    }
  };
  //outside click
  // Handle search bar open & close
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <div
        id="navbar"
        className={`z-50 mb-8 flex fixed left-0 right-0  bg-transparent px-3 xl:px-6 py-4 xl:py-2 border-r border-card`}
      >
        <div className="flex xl:p-3 mr-auto font-semibold text-lg text-white ">
          <div className="text-red-500 xl:mr-10  mr-2 font-extrabold xl:text-3xl">
            NiceFlix
          </div>
          {/* responsive */}
          <div
            onClick={handleMenuClick}
            className="hover:text-gray-300 xl:hidden text-white cursor-pointer mt-1 xl:mt-2 text-sm mb-1 relative"
          >
            Menu <i class="bx bx-chevron-down text-2xl absolute xl:top-1"></i>
            <div className="absolute">
              <div
                className={` ${
                  isClicked ? "flex" : "hidden"
                } flex-col items-center gap-6 border border-t-white border-t-4 border-gray-600 py-5 absolute top-4 z-50 -left-16 bg-gray-800 opacity-90 w-48`}
              >
                <div className="arrow text-white cursor-pointer "></div>
                <Link to="/">
                  {" "}
                  <div className="hover:text-white cursor-pointer">
                    Home
                  </div>{" "}
                </Link>
                <Link to="/movies">
                  <div className="hover:text-white cursor-pointer">Movies</div>
                </Link>
                <Link to="/shows">
                  <div className="hover:text-white cursor-pointer">
                    TV Shows
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Home */}
          <div className="hidden xl:flex space-x-8">
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
        <button
          id="searchButton"
          className={`${
            isInputOpen ? "hidden" : "block"
          } xl:text-3xl text-xl text-white mr-2 xl:mr-5 xl:mt-0 `}
          onClick={handleSearchButtonClick}
        >
          <BiSearch />
        </button>
        {isInputOpen && (
          <div
            id="searchIcon"
            ref={searchBarRef}
            className="search-input-container flex absolute top-3 right-20 xl:top-4 xl:right-36 border border-solid border-white transition-all duration-5000 transform translate-x-full "
          >
            <div className="bg-gray-900 opacity-90 xl:opacity-80 top-7 pt-1 xl:pt-2 pl-1 text-3xl">
              <BiSearch />
            </div>
            <input
              onChange={handleSearchParam}
              value={searchParam.get("q") ? searchParam.get("q") : ""}
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="search-input text-lg xl:p-2 p-0 text-white font-semibold xl:w-80 w-54 bg-gray-900 opacity-90 xl:opacity-80 outline-none "
            />
            {searchParam.get("q") && (
              <i
                onClick={() => {
                  setSearchParam("");
                }}
                class="bx bx-x bg-gray-900 cursor-pointer hover:text-white opacity-90 xl:opacity-80 top-7 pt-1 xl:pt-2 text-3xl"
              ></i>
            )}
          </div>
        )}
        <Link to="/account">
          {!user ? (
            <button className="p-2 xl:w-24 xl:h-10 text-white text-xs font-bold rounded-md xl:mt-3 bg-red-600 hover:bg-red-700">
              SIGN IN
            </button>
          ) : (
            <div className="xl:text-2xl xl:mt-3  text-white font-extrabold">
              {user.firstName}
            </div>
          )}
        </Link>
      </div>
    </>
  );
};
export default Navbar;
