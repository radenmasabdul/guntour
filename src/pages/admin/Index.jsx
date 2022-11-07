import React from "react";
import { WithRouter } from "utils/Navigation";

import { NavbarAdmin, Sidebar } from "components/Navbar";

import { AiFillDelete } from "react-icons/ai";
import Tent from "assets/camping-tent.svg";
import Mat from "assets/mat.svg";
import Hammock from "assets/hammock.svg";
import { ModalAdminProduct, ModalEditAdminProduct } from "components/ModalAdmin";

const AdminProduct = () => {
  return (
    <div className="mx-auto grid md:grid-flow-col gap-2">
      <aside className="md:grid-col-span-1">
        <Sidebar />
      </aside>

      <div className="md:grid-col-span-2">
        <NavbarAdmin />
        <div className="divider text-[#F0F0F0]" />

        <div className="mt-10">
          <div className="col-span-2">
            <div
              htmlFor="my-modal3"
              className="text-right flex items-center justify-end mt-3 font-medium text-base mr-11"
            >
              <ModalAdminProduct/>
            </div>

            <div className="overflow-x-auto py-6 mr-11">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>DESCRIPTION</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex">
                          <img
                            src={Tent}
                            alt=""
                            className="max-w-xl h-[56px] w-[56px] rounded-lg mr-10"
                          />
                          <p className="mt-4"> Camping Tent </p>
                        </div>
                      </div>
                    </td>
                    <td>100K/day</td>
                    <td>See Details</td>
                    <td>
                      <div className="flex items-center text-sm">
                        <button
                          className="flex items pt-10 justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-[#494949] focus:outline-none focus:shadow-outline-gray"
                          aria-label="Edit"
                        >
                          <ModalEditAdminProduct className="fill-secondary text-3xl mr-4" />
                        </button>
                        <button
                          className="flex items justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                          aria-label="Edit"
                        >
                          <AiFillDelete className="fill-[#CC0000] text-3xl mr-4" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>2</th>
                    <td>
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex">
                          <img
                            src={Mat}
                            alt=""
                            className="max-w-xl h-[56px] w-[56px] rounded-lg mr-10"
                          />
                          <p className="mt-4"> Mat </p>
                        </div>
                      </div>
                    </td>
                    <td>49K/day</td>
                    <td>See Details</td>
                    <td>
                      <div className="flex items-center space-x-4 text-sm mt-10">
                        <button
                          className="flex items pt-10 justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-[#494949] focus:outline-none focus:shadow-outline-gray"
                          aria-label="Edit"
                        >
                          <ModalEditAdminProduct className="fill-secondary text-3xl mr-4" />
                        </button>
                        <button
                          className="flex items justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                          aria-label="Edit"
                        >
                          <AiFillDelete className="fill-[#CC0000] text-3xl mr-4" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>3</th>
                    <td>
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex">
                          <img
                            src={Hammock}
                            alt=""
                            className="max-w-xl h-[56px] w-[56px] rounded-lg mr-10"
                          />
                          <p className="mt-4"> Hammock </p>
                        </div>
                      </div>
                    </td>
                    <td>69K/day</td>
                    <td>See Details</td>
                    <td>
                      <div className="flex items-center space-x-4 text-sm">
                        <button
                          className="flex items pt-10 justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-[#494949] focus:outline-none focus:shadow-outline-gray"
                          aria-label="Edit"
                        >
                          <ModalEditAdminProduct className="fill-secondary text-3xl mr-4" />
                        </button>
                        <button
                          className="flex items justify-between px-2 py-2 text-sm font-medium leading-5  rounded-lg text-gray-400 focus:outline-none focus:shadow-outline-gray"
                          aria-label="Edit"
                        >
                          <AiFillDelete className="fill-[#CC0000] text-3xl mr-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(AdminProduct);
