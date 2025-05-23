import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Elena from "../../assets/Elena.png";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { TbLogout } from "react-icons/tb";
import { store } from "../../redux/Store";
import { updateLoggedInStatus } from "../../redux/DataSlice";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [supportMenu, setSupportMenu] = useState(false);
  const supportRef = useRef(null);
  const menuRef = useRef(null);
  const userRef = useRef(null);
  const LoggedInStatus = useSelector((state) => state.data.LoggedInStatus);

  const MenuElements = [
    { link: "/", display: "Home" },
    { link: "/necessity", display: "Necessity" },
    { link: "/development", display: "Development" },
    { link: "/trials", display: "Trials" },
    { link: "/features", display: "Features" },
    { link: "/procurement", display: "Procurement" },
    { link: "/NavIC", display: "NavIC" },
    { link: "/elena", display: "Elena" },
    { link: "/contact", display: "Contact Us" },
    { link: "/faq", display: "FAQ" },
  ];

  const handlereload = () => {
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }

      if (supportRef.current && !supportRef.current.contains(event.target)) {
        setSupportMenu(false);
      }

      if (userRef.current && !userRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-full rounded-xl relative">
        {/* Top Navbar */}
        <nav className="flex justify-between py-2 px-4 items-center bg-[var(--primary)]">
          <div className="flex items-center gap-2">
            <img
              src={Elena}
              className="h-[50px] bg-white p-1 rounded-md cursor-pointer"
              alt="Elena Logo"
              onClick={handlereload}
            />
            <h5 className="text-white font-semibold text-xl ml-2">
              Grid Converter
            </h5>
          </div>

          <div className="flex items-center gap-3" ref={userRef}>
            {!LoggedInStatus ? (
              <div
                className="font-semibold bg-white border rounded-lg px-3 py-2 cursor-pointer text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white hover:border-white transition-all duration-300"
                onClick={() => navigate("/login")}
              >
                Login
              </div>
            ) : (
              <div className="relative inline-block text-left">
                <div
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="cursor-pointer"
                >
                  <FaUserCircle size={30} className="text-white" />
                </div>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-50">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.sessionStorage.clear();
                        store.dispatch(updateLoggedInStatus(false));
                        navigate("/login");
                      }}
                      className="w-full text-left px-4 py-4 text-md text-gray-700 hover:bg-gray-100 font-semibold flex flex-row items-center cursor-pointer"
                    >
                      <TbLogout size={20} className="text-red-500 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white text-2xl p-2 rounded hover:bg-white/10 transition duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars />
            </button>
          </div>
        </nav>

        {/* Menu Items */}
        <nav
          ref={menuRef}
          className={`${
            menuOpen ? "block absolute z-50 left-0 top-full" : "hidden"
          } md:flex justify-center items-center bg-[var(--secondary)] w-full md:static md:z-auto`}
        >
          <ul className="flex flex-col md:flex-row justify-between w-full py-1 px-4">
            {MenuElements.map((val, index) => (
              <Link
                key={index}
                to={val.link}
                onClick={() => setMenuOpen(false)}
              >
                <li
                  className={`font-semibold text-sm p-2 px-4 cursor-pointer duration-300 text-center rounded-lg m-1 ${
                    location.pathname === val.link
                      ? "text-white bg-[var(--primary)]"
                      : "text-gray-900"
                  }`}
                >
                  {val.display}
                </li>
              </Link>
            ))}
            {LoggedInStatus && (
              <li
                className={`relative font-semibold text-sm p-2 px-4 text-gray-900 text-center rounded-lg m-1 cursor-pointer ${
                  (location.pathname.includes("/feedback") ||
                    location.pathname.includes("/ticket")) &&
                  "text-white bg-[var(--primary)]"
                }`}
                ref={supportRef}
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setSupportMenu((prev) => !prev);
                  }}
                >
                  Support
                </div>
                {supportMenu && (
                  <ul className="absolute top-[100%] right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-md z-[100] text-gray-700">
                    <Link to="/feedback" onClick={() => setSupportMenu(false)}>
                      <li className="px-4 py-2 hover:bg-gray-100">Feedback</li>
                    </Link>
                    <Link to="/ticket" onClick={() => setSupportMenu(false)}>
                      <li className="px-4 py-2 hover:bg-gray-100">Ticket</li>
                    </Link>
                  </ul>
                )}
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
