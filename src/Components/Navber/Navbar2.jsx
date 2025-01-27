import { Link, NavLink } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Navbar2 = () => {
  const { logout, user } = useAuth();

  const navlinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "font-bold"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "font-bold"
          }
          to="/allartcraftitems"
        >
          All Art & craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "font-bold"
          }
          to="/addcraftitem"
        >
          Add Craft Item
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "font-bold"
          }
          to="/myart"
        >
          My Art&Craft List
        </NavLink>
      </li>
    </>
  );

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="bg-transparent shadow-lg">
       <div className="container mx-auto navbar">
      <div className="navbar-start">
        <div className="dropdown z-30">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* <Menus></Menus> */}
            {navlinks}
          </ul>
        </div>

        <Link to="/">
          {" "}
          <button className="lg:text-2xl font-bold">
            {" "}
            Eureka Crafts{" "}
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* <Menus></Menus> */}
          {navlinks}
        </ul>
       
      </div>
      <div className="navbar-end">
        {user ? (
          <div
            className="dropdown dropdown-end tooltip  tooltip-left"
            data-tip={`${user.displayName}`}
          >
            <div className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="" src={user?.photoURL} />
                <div>
                  <button className="btn"></button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {user ? (
          <button
            onClick={logout}
            className="btn  lg:btn-md btn-sm bg-blue-700 text-white hover:bg-white
             hover:text-blue-700 hover:border hover:border-blue-600"
          >
            {" "}
            <FaPowerOff></FaPowerOff> Log Out
          </button>
        ) : (
          <div className="flex">
            <Link to="/login">
            <button className="btn  lg:btn-md btn-sm bg-blue-700 text-white hover:bg-white transition-all
             hover:text-blue-700 hover:border hover:border-blue-600">
              Login
            </button>
           
          </Link>
          <Link to="/register">
          <button className="btn  lg:btn-md btn-sm bg-blue-700 text-white hover:bg-white transition-all
             hover:text-blue-700 hover:border hover:border-blue-600">
              Register
            </button>
           
          </Link>
          </div>
          
        )}

<label className="cursor-pointer grid place-items-center">
          <input
            onChange={handleToggle}
            type="checkbox"
            checked={theme === "dark"}
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
    </div>
  );
};

export default Navbar2;
