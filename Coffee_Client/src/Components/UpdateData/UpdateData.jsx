import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateData = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplie = form.supplie.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const coffee = { name, chef, supplie, taste, category, details, photoURL };

    fetch(
      `https://coffee-house-quxv1znrs-masums-projects-ab040a05.vercel.app/coffees/${loaderData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(coffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Data added Successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };
  return (
    <div>
      <Link to="/">
        <p className="inline-flex justify-center items-center gap-2 heading-color font-bold text-xl ">
          {" "}
          <FaArrowLeftLong /> Back To Home
        </p>
      </Link>
      <div className="bg-[#F4F3F0] p-16 mt-10">
        <div className="space-y-7">
          <h1 className="text-center text-4xl font-bold tracking-tight text-[#374151]">
            Update Existing Data
          </h1>
          <p className="w-[80%] mx-auto rale-way text-center">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-2 gap-6 p-6 ">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3 ">
                  <label htmlFor="firstname" className="text-sm">
                    Name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="name"
                    defaultValue={loaderData.name}
                    placeholder="Enter Coffee name"
                    className="w-full p-2 rale-way text-sm outline-0  "
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    Chef
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="chef"
                    placeholder="Enter coffee chef"
                    className="w-full p-2 rale-way text-sm outline-0  "
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    Supplie
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="supplie"
                    placeholder="Enter coffee supplie"
                    className="w-full p-2 rale-way text-sm outline-0  "
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    Taste
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="taste"
                    placeholder="Enter coffee taste"
                    className="w-full p-2 rale-way text-sm outline-0  "
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    Category
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="category"
                    placeholder="Enter coffee category"
                    className="w-full p-2 rale-way text-sm outline-0  "
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    Details
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="details"
                    placeholder="Enter coffee Details"
                    className="w-full p-2 rale-way text-sm outline-0  "
                  />
                </div>
              </div>
              <div className=" col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    Photo
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="photoURL"
                    placeholder="Enter coffee Photo URL"
                    className="w-full p-2 rale-way text-sm outline-0  "
                  />
                </div>
              </div>
              <div className="col-span-full lg:col-span-3 border-[#331A15] border-[1px]">
                <input
                  className="bg-[#D2B48C] p-1 w-full font-bold "
                  type="submit"
                  value="Update Coffee"
                />
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdateData;
