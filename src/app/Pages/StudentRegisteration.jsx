import Header from "./Header";
import Footer from "./Footer";
import "../styles/registration.css";

const StudentRegisteration = () => {
  return (
    <div>
      <Header />
      <div className='body'>
      <div className="container">
        <h2>New Student Registration</h2>
        <p>
          Welcome to Our Our Lady of Apostle Secondary School’s New Students’
          Registration Portal.
        </p>
        <p>
        This section is for newly admitted students ONLY and you’re expected to have the following information in place before proceeding with the registration process
        </p>
        <p>
        If you have the information, you can proceed with the registration. Click on the appropriate section below to register your profile.
        </p>
        <div className='btns'>
            <button><img src='https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729516634/Vector_1_anuedc.png' width='25' />JSS 1-3</button>
            <button><img src='https://res.cloudinary.com/dgpuu4bhh/image/upload/v1729516634/Vector_1_anuedc.png' width='25' />JSS 1-3</button>
        </div>
      </div>
      <div className='card'>
        <h3>Requirement For Registration</h3>
        <ul>
            <li>Admission number</li>
            <li>Student Passport</li>
            <li>Date of Birth</li>
            <li>Parent Email and Phone Number</li>
        </ul>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentRegisteration;
