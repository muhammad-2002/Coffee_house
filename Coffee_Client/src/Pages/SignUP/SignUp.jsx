import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/Provider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const lastSignInTime = result.user.metadata.lastSignInTime;
        const user = { email, lastSignInTime };
        fetch(
          "https://coffee-house-quxv1znrs-masums-projects-ab040a05.vercel.app/user",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(user),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "success!",
                text: "Data added Successfully",
                icon: "success",
                confirmButtonText: "ok",
              });
            }
          });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-5">
        <div className="w-[80%] p-8 space-y-2 rounded-xl bg-[#F4F3F0] dark:text-gray-800 ">
          <h1 className="text-2xl font-bold text-center">
            Register your account
          </h1>
          <form onSubmit={handleSignup} className="space-y-4">
            {/* <div className="space-y-1 text-sm relative">
              <label htmlFor="username" className="block dark:text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full px-8 py-3 rounded-md border dark:border-[#00AFC6] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />

              <p className="absolute text-xl top-8 left-2"></p>
            </div>
            <div className="space-y-1 text-sm relative">
              <label htmlFor="photoUrl" className="block dark:text-gray-600">
                PhotoURL
              </label>
              <input
                type="text"
                placeholder="PhotoURL"
                className="w-full px-8 py-3 rounded-md border dark:border-[#00AFC6] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <p className="absolute text-xl top-8 left-2"></p>
            </div> */}
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
                value="Register"
              />
            </div>
          </form>

          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            Alradey you have an account?
            <Link
              to="/login"
              className="underline font-bold dark:text-gray-800"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
