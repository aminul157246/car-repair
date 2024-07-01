
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
// import logo from '../../assets/logo-main.png'

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)

  const items = <>
  
    <li className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1"><NavLink
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
      style={{ background: 'none' }}
      to={'/'}>Home</NavLink></li>

    <li className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1"><NavLink 
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
      style={{ background: 'none' }} to={'/contact'}>Contact</NavLink></li>

    <li className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1"><NavLink 
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
      style={{ background: 'none' }}
       to={'/about'}>About US</NavLink></li>

    <li className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1"><NavLink 
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
      style={{ background: 'none' }}
       to={'/slip'}>Slip</NavLink></li>

    

    <li className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
      {
        user ? <p  style={{background:'none'}}
          onClick={logOut}
        >Logout</p>
          : <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "font-bold" : ""}
        style={{ background: 'none' }} to={'/login'}>Login </NavLink>
      }
    </li>
    


  </>

  return (
    <div>
      <div className="navbar bg-gray-100 py-4 px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="  lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  p-2  rounded-3xl w-52">
              {items}

            </ul>
          </div>
          <NavLink to={'/'}> CU_PAYMENT </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {items}

          </ul>


        </div>
        <div className="navbar-end">
          {
            user ? <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt='' />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  
                </li>
                <li>
                  <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                </li>
                <li>
                  <button className="btn btn-sm  btn-ghost"
                    onClick={logOut}
                  >Logout</button>

                </li>
              </ul>
            </div>
              :
              <Link to='/login'>
                <button className="btn btn-sm  btn-ghost">Login</button>
              </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;