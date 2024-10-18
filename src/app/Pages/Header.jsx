import "../styles/header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <ul className="d-flex justify-center gap-10 bg-slate-200">
          <li>
            <a>Student Portal</a>
          </li>
          <li>
            <a>PTA</a>
          </li>
          <li>
            <a>Prospective Parent</a>
          </li>
          <li>
            <a>Alumni</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
        <div className="nav bg-slate-600 text-white">
          <img src={logo} alt="Logo" />
          <div className="shcoolName">
            <h2 className="px-3">OUR LADY <br /> SECONDARY SCHOOL, YABA</h2>
          </div>
          <div>
            <ul className="justify-center gap-16 px-11">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Academics</a>
              </li>
              <li>
                <a>Admission</a>
              </li>
              <li>
                <a>Student Life</a>
              </li>
              <li>
                <a>News</a>
              </li>
              <li>
                <a>Event</a>
              </li>
              <li>
                <a>Gallery</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section>
        <div className="hero-section">
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
