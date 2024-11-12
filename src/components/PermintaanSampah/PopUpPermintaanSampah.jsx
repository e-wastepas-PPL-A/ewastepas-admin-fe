"use client";

import { Button, Modal, Select } from "flowbite-react";
import { useState, useEffect } from "react";
import { HiChat, HiEye, HiLocationMarker, HiPhone } from "react-icons/hi";
import axios from "axios";

export default function CustomPopUp({ onClose }) {
  const [openModal, setOpenModal] = useState(true);
  const [modalPlacement, setModalPlacement] = useState('center');

  const handleClose = () => {
    setOpenModal(false);
    onClose(); // Panggil fungsi onClose dari props
  };

  return (
    <>
      <Modal
        show={openModal}
        position={modalPlacement}
        onClose={handleClose}
      >
        <Modal.Header>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                <img src="https://via.placeholder.com/32" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold">Faqih</span>
            </div>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-xl font-bold">#1</span>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">Accepted</button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold">Phone Number</p>
                <p>0812343567</p>
              </div>
              <div>
                <p className="font-bold">Category</p>
                <p>Electronic</p>
              </div>
              <div>
                <p className="font-bold">Purchase Date</p>
                <p>20/10/2024</p>
              </div>
              <div>
                <p className="font-bold">Quantity</p>
                <p>5</p>
              </div>
              <div>
                <p className="font-bold">Address</p>
                <p>Jl. Ngawi no 111</p>
              </div>
              <div>
                <p className="font-bold">Destination</p>
                <p>Dropbox Setiabudhi</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xl font-bold mr-2">John</span>
                  <p>(Driver)</p>
                </div>
                <div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">
                    <HiPhone className="w-5 h-5" />
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                    <HiChat className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <p>08123456789</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="bg-[#005B96] text-white py-2 px-4">
                <p className="font-bold">DESCRIPTION</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <div className="mr-4">
                    <img src="monitor.png" alt="" className="w-20 h-20" />
                  </div>
                  <div>
                    <p className="font-bold">Handphone</p>
                    <p className="text-sm">Qty: 2</p>
                  </div>
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                  <span className="font-bold">20 Point</span>
                </button>
              </div>              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <div className="mr-4">
                    <img src="monitor.png" alt="" className="w-20 h-20" />
                  </div>
                  <div>
                    <p className="font-bold">Monitor</p>
                    <p className="text-sm">Qty: 2</p>
                  </div>
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                  <span className="font-bold">20 Point</span>
                </button>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-xl font-bold mr-2">Total Points</span>
                  </div>
                  <div>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                      <span className="font-bold">40 Point</span>
                    </button>
                  </div>
                </div>
              </div>      

              <div className="border-t border-gray-200 pt-4 mt-4">
              </div>   

              <div className="mt-4">
                <div className="bg-[#005B96] text-white py-2 px-4">
                  <p className="font-bold">TRACKING</p>
                </div>
              </div>      

              <div class="flex items-center p-4">
                <button className="bg-[#005B96] text-white px-4 py-2 rounded-md mr-5">
                  <HiLocationMarker className="w-5 h-5" />
                </button>
                <div>
                  <p class="font-bold">Courier to the location</p>
                  <p>Waiting for Pickup</p>
                </div>
              </div>
              <div class="flex items-center p-4">
                <button className="bg-[#005B96] text-white px-4 py-2 rounded-md mr-5">
                  <HiLocationMarker className="w-5 h-5" />
                </button>
                <div>
                  <p class="font-bold">In Delivery</p>
                  <p>On the way</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

    </>
  );
}
