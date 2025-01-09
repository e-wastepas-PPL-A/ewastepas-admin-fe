"use client";

import { Button, Modal, Timeline } from "flowbite-react";
import { useState } from "react";
import { HiChat, HiEye, HiLocationMarker, HiPhone, HiCheck, HiTruck } from "react-icons/hi";

export default function CustomPopUp({ onClose, pickupData }) {
  const [openModal, setOpenModal] = useState(true);
  const [modalPlacement, setModalPlacement] = useState('center');

  const handleClose = () => {
    setOpenModal(false);
    onClose(); 
  };

  const trackingSteps = [
    { title: "Courier to the location", body: "Waiting for pickup", icon: HiLocationMarker },
    { title: "In Delivery", body: "On the way", icon: HiTruck },
    { title: "In Delivery", body: "The trash has been picked up", icon: HiTruck },
    { title: "Success", body: "Order completed", icon: HiCheck }
  ];

  const currentStatusIndex = trackingSteps.findIndex(step => 
    pickupData?.status.includes(step.title)
  );

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
              <span className="text-xl font-bold">{pickupData?.customer_name || "Customer Name"}</span>
            </div>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-xl font-bold">#{pickupData?.id}</span>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">{pickupData?.status}</button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold">Phone Number</p>
                <p>{pickupData?.customer_phone}</p>
              </div>
              <div>
                <p className="font-bold">Pickup Date</p>
                <p>{pickupData?.date}</p>
              </div>
              <div>
                <p className="font-bold">Pickup Address</p>
                <p>{pickupData?.dropbox_address || "N/A"}</p>
              </div>
              <div>
                <p className="font-bold">Courier Name</p>
                <p>{pickupData?.courier_name}</p>
              </div>
              <div>
                <p className="font-bold">Courier Phone</p>
                <p>{pickupData?.courier_phone}</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="bg-[#005B96] text-white py-2 px-4">
                <p className="font-bold">DESCRIPTION</p>
              </div>
            </div>

            {pickupData?.waste.map((detail) => (
              <div key={detail.id} className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <div className="mr-4">
                    <img src={detail.image || "monitor.png"} alt={detail.waste_name} className="w-20 h-20" />
                  </div>
                  <div>
                    <p className="font-bold">{detail.waste_name}</p>
                    <p className="text-sm">Points: {detail.point}</p>
                  </div>
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                  <span className="font-bold">{detail.point} Points</span>
                </button>
              </div>
            ))}

            <div className="mt-4">
              <div className="bg-[#005B96] text-white py-2 px-4">
                <p className="font-bold">TRACKING</p>
              </div>
            </div>

            <Timeline className="mt-4">
              {trackingSteps.map((step, index) => (
                <Timeline.Item key={index} className={index <= currentStatusIndex ? "text-green-500" : ""}>
                  <Timeline.Point icon={step.icon} />
                  <Timeline.Content>
                    <Timeline.Title>{step.title}</Timeline.Title>
                    <Timeline.Body>
                      {step.body}
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
