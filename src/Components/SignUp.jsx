import Auth from "../assets/images/auth.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setPhoneNumberError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!email) {
      setEmailError("Enter your email");
      return;
    }

    // Simple password validation
    if (!password) {
      setPasswordError("Enter your password");
      return;
    }

    // Simple phone number validation
    if (!phoneNumber) {
      setPhoneNumberError("Enter your number");
      return;
    }

    console.log("Registration successful!");
    navigate("/login");
  };

  return (
    <div>
      <div className="auth">
        <div className="auth_img">
          <img src={Auth} alt="Auth" />
        </div>
        <div className="auth_form">
          <div className="form_back">
            <Link to="/login">
              {" "}
              <p className="form_back_p">&larr; &nbsp; Back</p>
            </Link>
          </div>
          <div className="form">
            <h2 className="form_title">Register with us.</h2>
            <p className="form_p">Explore open career opportunities</p>
            <form onSubmit={handleSubmit}>
              <div className="form_group">
                <input
                  type="text"
                  className="form_input"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && <p className="error_message">{emailError}</p>}
              </div>
              <div className="form_group">
                <input
                  type="password"
                  className="form_input"
                  placeholder="Enter your password..."
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && (
                  <p className="error_message">{passwordError}</p>
                )}
              </div>
              <div className="form_group">
                <input
                  type="text"
                  className="form_input"
                  placeholder="Enter your number..."
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
                {phoneNumberError && (
                  <p className="error_message">{phoneNumberError}</p>
                )}
              </div>
              <div className="form_group">
                <button type="submit" className="form_btn">
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="form_option">
            <p className="form_optopn_p">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
