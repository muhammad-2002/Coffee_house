import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CofeeCard = ({ c, setCoffee, coffees }) => {
  console.log(coffees);
  const handleDelete = (_id) => {
    const remaning = coffees.filter((coffee) => coffee._id !== _id);
    console.log(remaning);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setCoffee(remaning);
            }
          });
      }
    });
  };
  const handleEdit = (_id) => {
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className=" ">
      <div className=" p-8 sm:flex sm:space-x-6 dark:bg-[#F5F4F1] dark:text-gray-800">
        <div className="flex-shrink-0 w-full flex justify-center mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0 ">
          <img
            src={c.photoURL}
            alt=""
            className="object-cover object-center  w-[70%] h-full rounded "
          />
        </div>
        <div className="flex gap-5 space-y-4 flex-1 justify-between items-center">
          <div className="text-start space-y-2">
            <h1>Name:{c.name}</h1>
            <h1>Chef:{c.chef}</h1>
            <h1>Taste:{c.taste}</h1>
          </div>
          <div className="space-y-3 text-white ">
            <p className="bg-[#D2B48C] p-2 rounded-sm">
              <IoEyeOutline />
            </p>
            <p>
              <Link to={`/update-data/${c._id}`}>
                <p
                  onClick={() => handleEdit(c._id)}
                  className="bg-[#3C393B] p-2 rounded-sm cursor-pointer"
                >
                  <MdOutlineEdit></MdOutlineEdit>
                </p>
              </Link>
            </p>
            <p
              onClick={() => handleDelete(c._id)}
              className="bg-[#EA4744] p-2 rounded-sm cursor-pointer"
            >
              <AiTwotoneDelete />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CofeeCard;
