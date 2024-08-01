
import { Link } from "react-router-dom";
import "./landingpage.css";
import logo from "./Chat.jpg";

function LandingPage() {
  return (
    <div className="landing-page">
      <img src={logo} alt="ChatBot Logo" className="landing-logo" />
      <div className="landing-buttons">
        <Link to="/chat">
          <button className="landing-button">Start Chatting</button>
        </Link>
        <Link to="/">
          <button className="landing-button">Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;