import { createBrowserRouter } from "react-router-dom";
import AddCoffee from "../Components/AddCoffee";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-Coffee",
        element: <AddCoffee></AddCoffee>,
      },
    ],
  },
]);

export default router;
