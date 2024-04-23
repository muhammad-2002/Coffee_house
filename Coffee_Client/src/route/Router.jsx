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
        loader: () => fetch("http://localhost:3000/coffees"),
        element: <Home></Home>,
      },
      {
        path: "/add-coffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/update-data/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
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
        loader: () => fetch("http://localhost:3000/user"),
        element: <UserTable></UserTable>,
      },
    ],
  },
]);

export default router;
