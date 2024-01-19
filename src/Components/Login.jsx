import { Link, useNavigate } from "react-router-dom";
import Auth from "../assets/images/auth.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter Your email and password.");
      return;
    }

    console.log(email, password);
    login();
    navigate("/");
  };

  return (
    <>
      <div className="auth">
        <div className="auth_img">
          <img src={Auth} alt="Auth" />
        </div>
        <div className="auth_form">
          <div className="form_back">
            <Link to="/">
              {" "}
              <p className="form_back_p">&larr; &nbsp; Back</p>
            </Link>
          </div>
          <div className="form">
            <h2 className="form_title">Login to your account</h2>
            <p className="form_p">Explore open career opportunities</p>
            <form onSubmit={handleSubmit}>
              <div className="form_group">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form_input"
                  placeholder="Enter your email..."
                />
              </div>
              <div className="form_group">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="form_input"
                  placeholder="Enter your password..."
                />
              </div>
              <div className="form_group">
                <button type="submit" className="form_btn">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="form_option">
            <p className="form_optopn_p">
              Don&lsquo;t have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
