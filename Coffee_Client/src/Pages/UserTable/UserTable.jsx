import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UserTable = () => {
  const loaderData = useLoaderData();
  const [users, setUser] = useState(loaderData);

  const handleDeleteClick = (userId) => {
    const remaning = users.filter((user) => user._id !== userId);

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
        fetch(`http://localhost:3000/user/${userId}`, {
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
              setUser(remaning);
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto bg-[#F4F3F0] p-10">
      <h2 className="text-4xl text-[#374151] text-center font-bold mb-4">
        Manage Users
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full   ">
          <thead className="bg-gray-50 rale-way  ">
            <tr>
              <th className="px-4 py-2 text-center">User ID</th>
              <th className="px-4 py-2 text-center">Email</th>
              <th className="px-4 py-2 text-center">Last Sign-in Time</th>
              <th className="px-4 py-2 text-center">Last Log at</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>

          <br />
          <tbody className="divide-y rale-way  divide-gray-300 border border-gray-300 ">
            {users.map((user) => (
              <tr key={user._id}>
                <td className="px-4 py-2 text-center">{user._id}</td>
                <td className="px-4 py-2 text-center">{user.email}</td>
                <td className="px-4 py-2 text-center">{user.lastSignInTime}</td>
                <td className="px-4 py-2 text-center">
                  {user.lastLoginAt || "..................."}
                </td>
                <td className="px-4 py-2 text-center ">
                  <div className="flex gap-3 justify-center items-center">
                    <Link
                      to="/login"
                      className="bg-[#D2B48C] text-white text-xl font-bold py-1 px-4 rounded"
                    >
                      <MdOutlineEdit />
                    </Link>
                    <button
                      className="bg-[#cf1313] text-white text-xl font-bold py-1 px-4 rounded"
                      onClick={() => handleDeleteClick(user._id)}
                    >
                      <AiTwotoneDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
