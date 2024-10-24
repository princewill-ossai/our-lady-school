import Image from "next/image";
import "../styles/header.css";

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
          <img
            src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729259391/tup63k7q3dslqnpei3iy.png"
            alt=""
            width="70"
          />
          <div className="shcoolName">
            <h2 className="px-1">
              OUR LADY SECONDARY SCHOOL, YABA
            </h2>
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
      
    </>
  );
};

export default Header;
