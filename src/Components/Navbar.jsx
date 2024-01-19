// import Logo from "../assets/images/transparent-bpo-logo 1.png";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { logout, isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div className="container nav_container">
            <a href="/" className="logo">
              {/* <img src={Logo} alt="" className="logo_img" /> */}
              <h1 className="job-logo">Job Kro</h1>
            </a>
            <ul className="nav_list">
              <li className="nav_item">
                <a href="#" className="nav_link">
                  Find Jobs
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link">
                  News
                </a>
              </li>
              <li className="nav_item">
                {isLoggedIn ? (
                  <Link className="nav_btn" onClick={logout}>
                    Logout
                  </Link>
                ) : (
                  <Link to="/login" className="nav_btn">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="header_container">
            <div className="header_wrapper">
              <h1 className="header_main_title">
                Explore open career opportunities.
              </h1>
              <p className="header_p">
                We commit to exceptional company culture and outstanding
                benefits
              </p>
              <div className="header_form">
                <h2 className="header_form_title">
                  Find the job that best suits you.
                </h2>
                <select name="country" id="" className="header_select">
                  <option value="sweden">Delhi</option>
                  <option value="norway">Bangalore</option>
                  <option value="denmark">Pune</option>
                </select>
                <button className="header_btn">Search</button>
              </div>
              <div className="header_tags">
                <div className="header_tag">
                  <span>Discover recent news</span>
                  <span>&rarr;</span>
                </div>
                <div className="header_tag tag-2">
                  <span>Know your process</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
