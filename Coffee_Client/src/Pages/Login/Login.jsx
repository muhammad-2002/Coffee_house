import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        const user = {
          lastLoginAt: result.user.metadata.lastLoginAt,
          email,
        };

        fetch(`http://localhost:3000/user`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-5">
        <div className="w-[80%] p-8 space-y-2 rounded-xl bg-[#F4F3F0] dark:text-gray-800 ">
          <h1 className="text-2xl font-bold text-center">Login your account</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="col-span-full sm:col-span-3 ">
              <label htmlFor="emails" className="text-sm">
                Email
              </label>
              <input
                id="firstname"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 rale-way text-sm outline-0  "
              />
            </div>
            <div className="col-span-full sm:col-span-3 ">
              <label htmlFor="password" className="text-sm">
                password
              </label>
              <input
                id="firstname"
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-2 rale-way text-sm outline-0  "
              />
            </div>

            <div className="col-span-full lg:col-span-3 border-[#331A15] border-[1px]">
              <input
                className="bg-[#D2B48C] p-1 w-full font-bold "
                type="submit"
                value="Login"
              />
            </div>
          </form>

          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            If you have No account?
            <Link
              to="/signUp"
              className="underline font-bold dark:text-gray-800"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
