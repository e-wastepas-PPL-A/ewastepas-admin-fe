"use client";

import { Button, Modal, Timeline } from "flowbite-react";
import { useState, useEffect } from "react";
import { HiChat, HiEye, HiLocationMarker, HiPhone, HiCheck, HiTruck } from "react-icons/hi";
import axios from "axios";

export default function CustomPopUp({ onClose, pickupData }) {
  const [openModal, setOpenModal] = useState(true);
  const [modalPlacement, setModalPlacement] = useState('center');

  const handleClose = () => {
    setOpenModal(false);
    onClose(); // Call the onClose function from props
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
              <span className="text-xl font-bold">{pickupData?.community.name || "Community Name"}</span>
            </div>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-xl font-bold">#{pickupData?.pickup_id}</span>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">{pickupData?.pickup_status}</button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold">Phone Number</p>
                <p>{pickupData?.community.phone}</p>
              </div>
              <div>
                <p className="font-bold">Pickup Date</p>
                <p>{pickupData?.pickup_date}</p>
              </div>
              <div>
                <p className="font-bold">Pickup Time</p>
                <p>{pickupData?.pickup_time}</p>
              </div>
              <div>
                <p className="font-bold">Pickup Address</p>
                <p>{pickupData?.pickup_address}</p>
              </div>
              <div>
                <p className="font-bold">Courier Name</p>
                <p>{pickupData?.courier.name}</p>
              </div>
              <div>
                <p className="font-bold">Courier Phone</p>
                <p>{pickupData?.courier.phone}</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="bg-[#005B96] text-white py-2 px-4">
                <p className="font-bold">DESCRIPTION</p>
              </div>
            </div>

            {pickupData?.pickup_detail.map((detail) => (
              <div key={detail.waste_id} className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <div className="mr-4">
                    <img src="monitor.png" alt={detail.waste.waste_name} className="w-20 h-20" />
                  </div>
                  <div>
                    <p className="font-bold">{detail.waste.waste_name}</p>
                    <p className="text-sm">Qty: {detail.quantity}</p>
                  </div>
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                  <span className="font-bold">{detail.points} Points</span>
                </button>
              </div>
            ))}

            <div className="mt-4">
              <div className="bg-[#005B96] text-white py-2 px-4">
                <p className="font-bold">TRACKING</p>
              </div>
            </div>

            <Timeline className="mt-4">
              <Timeline.Item>
                <Timeline.Point icon={HiLocationMarker} />
                <Timeline.Content>
                  <Timeline.Title>Courier to the location</Timeline.Title>
                  <Timeline.Body>
                    Waiting for pickup
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiTruck} />
                <Timeline.Content>
                  <Timeline.Title>In Delivery</Timeline.Title>
                  <Timeline.Body>
                    On the way
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiTruck} />
                <Timeline.Content>
                  <Timeline.Title>In Delivery</Timeline.Title>
                  <Timeline.Body>
                    The trash has been picked up
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiCheck} />
                <Timeline.Content>
                  <Timeline.Title>Success</Timeline.Title>
                  <Timeline.Body>
                    Order completed
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
