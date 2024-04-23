import { BsCupHot } from "react-icons/bs";
import { Link } from "react-router-dom";
import CofeeCard from "./CofeeCard";

const PopularProducts = ({ coffees, setCoffee }) => {
  return (
    <div className="text-center">
      <p className=" font-thin text-xl ">---Sip & Savo---</p>
      <h1 className="text-[#331A15] font-extrabold  text-5xl ">
        Our Popular Products
      </h1>
      <button className="bg-[#E3B577] px-3 py-2 font-bold text-white mt-6 rounded-md border-[#331A15] border-2">
        <Link to="add-coffee">
          <p className="inline-flex gap-3 justify-center items-center ">
            Add Coffee{" "}
            <span className="text-xl">
              <BsCupHot />
            </span>
          </p>
        </Link>
      </button>

      <div className="grid grid-cols-2 gap-6 mt-7">
        {coffees.map((c) => (
          <CofeeCard
            c={c}
            coffees={coffees}
            setCoffee={setCoffee}
            key={c._id}
          ></CofeeCard>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
