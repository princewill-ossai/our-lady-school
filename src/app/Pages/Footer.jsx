import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-flex">
        <div className='content-center'>
          <img
            src="https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729259391/tup63k7q3dslqnpei3iy.png"
            alt="school-logo"
            width="200"
          />
          <h1 className='font-extrabold text-lg'>OUR LADY <br /> SECONDARY SCHOOL, YABA</h1>
        </div>
        <div>
          <h2>Quick links</h2>
          <p><a>PTA</a></p>
          <p><a>Prospective Parent</a></p>
          <p><a>Student Portal</a></p>
          <p><a>Login Alumni</a></p>
          <p><a>Register Alumni</a></p>
        </div>
        <div>
          <h2>About Us</h2>
          <p><a>School History</a></p>
          <p><a>Improvement Plan</a></p>
          <p><a>School Anthem</a></p>
        </div>
        <div>
          <h2>Contact Information</h2>
          <p>
            P.O. Box 202,342, Herbert Macaulay Street, By Harvey Road, Yaba,
            Lagos.
          </p>

          <p>Phone: 08182446564</p>
          <p>Email: olassyaba@gmail.com</p>
        </div>
      </div>
      <div className="bottom-links">
        <a>School History</a>
        <a>Contact Us</a>
        <a>Sitemap</a>
      </div>
    </>
  );
};

export default Footer;
