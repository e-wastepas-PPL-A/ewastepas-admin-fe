"use client";

import { useState } from "react";
import { Modal } from "flowbite-react";
import { FaCheck, FaTimes } from "react-icons/fa";
import StickerImage from '../../assets/Sticker.png'; // Pastikan path sesuai

export default function ApproveKurirPopUp({ onClose }) {
  const [openConfirmationModal, setOpenConfirmationModal] = useState(true);
  const [openApproveSuccessModal, setOpenApproveSuccessModal] = useState(false);

  const handleCloseConfirmation = () => {
    setOpenConfirmationModal(false);
    onClose();
  };

  const handleApprove = () => {
    setOpenConfirmationModal(false);
    setOpenApproveSuccessModal(true);
  };

  const handleCloseApproveSuccess = () => {
    setOpenApproveSuccessModal(false);
    onClose();
  };

  return (
    <>
      {/* Modal Konfirmasi Approve */}
      {openConfirmationModal && (
        <Modal show={openConfirmationModal} position="center" onClose={handleCloseConfirmation}>
          <Modal.Header>Registrasi Kurir</Modal.Header>
          <Modal.Body>
            <p className="text-center mb-6">
              Apakah Anda yakin ingin menerima kurir ini?
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleCloseConfirmation}
                className="flex items-center text-white px-4 py-2 rounded-md font-semibold"
                style={{ backgroundColor: '#E72929'}}

              >
                Tidak
              </button>
              <button
                onClick={handleApprove}
                className="flex items-center text-white px-4 py-2 rounded-md font-semibold"
                style={{ backgroundColor: '#005B96' }}
              >
                Ya
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {/* Modal Berhasil Approve */}
      {openApproveSuccessModal && (
        <Modal show={openApproveSuccessModal} position="center" onClose={handleCloseApproveSuccess}>
          <Modal.Body>
            <div className="flex flex-col items-center p-6 text-center">
              <img src={StickerImage} alt="Berhasil" className="w-16 h-16 mb-4" />
              <h2 className="text-lg font-semibold text-green-700 mb-2">Berhasil</h2>
              <p className="text-gray-600 mb-6">Anda telah menerima kurir ini</p>
              <button
                onClick={handleCloseApproveSuccess}
                className="px-4 py-2 text-white font-semibold rounded-md"
                style={{ backgroundColor: '#005B96' }}
              >
                Kembali ke menu
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}
