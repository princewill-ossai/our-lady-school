import Header from "./Header";
import Footer from "./Footer";
import "../styles/form.css";

const LoginForm = () => {
  return (
    <div>
      <Header />
      <form>
        <h1>Log In</h1>
        <div>
          Login for this site is easy. Just fill in the fields below, and we'll
          get you to your account in no time.
        </div>
        <h3>Account Details</h3>
        <p>Username*</p>
        <input type="text" />
        <p>Password*</p>
        <input />
        <div>
          <button>Sing Up</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default LoginForm;
