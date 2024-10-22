import Header from "./Header";
import Footer from "./Footer";
import "../styles/form.css";
import { Input } from "postcss";

const Form = () => {
  return (
    <div>
      <Header />
      <form>
        <h1>Create an Account</h1>
        <div>
          Registering for this site is easy. Just fill in the fields below, and
          we'll get a new account set up for you in no time.
        </div>
        <h3>Account Details</h3>
        <p>Username*</p>
        <input type='text' />
        <p>Name*</p>
        <input type='text' />
        <p>Email Address*</p>
        <input type='text' />
        <p>Create Password*</p>
        <input />
        <p>Confirm Password*</p>
        <input />
        <div><button>Sing Up</button></div>
      </form>
      <Footer />
    </div>
  );
};

export default Form;
