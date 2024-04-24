import { createBrowserRouter } from "react-router-dom";
import AddCoffee from "../Components/AddCoffee";
import UpdateData from "../Components/UpdateData/UpdateData";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUP/SignUp";
import UserTable from "../Pages/UserTable/UserTable";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        loader: () =>
          fetch(
            "https://coffee-house-quxv1znrs-masums-projects-ab040a05.vercel.app/coffees"
          ),
        element: <Home></Home>,
      },
      {
        path: "/add-coffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/update-data/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-house-quxv1znrs-masums-projects-ab040a05.vercel.app/coffees/${params.id}`
          ),
        element: <UpdateData></UpdateData>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/user-table",
        loader: () =>
          fetch(
            "https://coffee-house-quxv1znrs-masums-projects-ab040a05.vercel.app/user"
          ),
        element: <UserTable></UserTable>,
      },
    ],
  },
]);

export default router;
