"use client";

import { useState } from "react";
import { Modal } from "flowbite-react";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function CustomPopUp({ onClose }) {
  const [openModal, setOpenModal] = useState(true);
  const [modalPlacement, setModalPlacement] = useState("center");

  const handleClose = () => {
    setOpenModal(false);
    onClose();
  };

  if (!openModal) return null;

  return (
    <Modal show={openModal} position={modalPlacement} onClose={handleClose}>
      <Modal.Header>Registrasi Kurir</Modal.Header>
      <Modal.Body>
        <p className="text-start mb-6">
          Apakah Anda yakin ingin menolak kurir ini?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleClose}
            className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md font-semibold"
          >
            <FaCheck className="mr-2" /> Ya
          </button>
          <button
            onClick={handleClose}
            className="flex items-center bg-red-600 text-white px-4 py-2 rounded-md font-semibold"
          >
            <FaTimes className="mr-2" /> Tidak
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
