import { Link } from "react-router-dom";

const PopularProducts = () => {
  return (
    <div>
      <p>---Sip & Savo---</p>
      <h1>Our Popular Products</h1>
      <button>
        <Link to="add-coffee">Add Coffee</Link>
      </button>
    </div>
  );
};

export default PopularProducts;
