import * as React from "react";
import { useRouter } from "next/router";

function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [formError, setFormError] = React.useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setFormError("Email not provided");
      return;
    }
    if (!password) {
      setFormError("Password not provided");
      return;
    }
    // Submit form
    setFormError("");
    router.push("/api/login");
  };

  const handleButtonClick = () => {
    router.push("/register");
  };

  return (
    <div className=" grid place-items-center mt-20">
      <div className=" bg-Black-Blue border-2 leading-9 w-80  h-120 px-2.5 rounded-md ">
        <form onSubmit={handleFormSubmit}>
          <h1 className="text-center mt-5 text-xl  font-semibold text-white   ">
            Login
          </h1>{" "}
          <br />
          <label className="text-white" htmlFor="email">
            Email
          </label>{" "}
          <br />
          <input
            id="email"
            className="w-full rounded"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />{" "}
          <br />
          <label className="text-white" htmlFor="password">
            Password
          </label>{" "}
          <br />
          <input
            id="password"
            className="w-full rounded"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />{" "}
          <br />
          {formError && <p className="text-red-600">{formError}</p>}
          <button
            className="bg-white mx-auto my-4 border px-3.5 w-full rounded font-semibold text-Black-Blue"
            type="submit"
          >
            LOGIN
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="border bg-red-300 rounded-md ">Google</button>
            <button className="border bg-red-300  rounded-md ">Facebook</button>
          </div>
          <button
            onClick={handleButtonClick}
            className=" text-white block  mb-2.5 mx-auto my-auto  "
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
