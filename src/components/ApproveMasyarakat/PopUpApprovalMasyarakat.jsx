"use client";

import { useState } from "react";
import { Modal } from "flowbite-react";
import StickerImage from '../../assets/Sticker.png';

export default function CustomPopUp({ onClose }) {
  const [openConfirmationModal, setOpenConfirmationModal] = useState(true);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const handleCloseConfirmation = () => {
    setOpenConfirmationModal(false);
    onClose();
  };

  const handleApprove = () => {
    setOpenConfirmationModal(false);
    setOpenSuccessModal(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccessModal(false);
    onClose();
  };

  return (
    <>
      {/* Modal Konfirmasi */}
      {openConfirmationModal && (
        <Modal show={openConfirmationModal} position="center" onClose={handleCloseConfirmation}>
          <Modal.Header>Registrasi Masyarakat</Modal.Header>
          <Modal.Body>
            <p className="text-center mb-6">
              Apakah Anda yakin ingin menerima masyarakat ini?
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleCloseConfirmation}
                className="flex items-center px-4 py-2 rounded-md font-semibold"
                style={{ color: '#005B96', border: '0.5px solid #989898' }}
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

      {/* Modal Berhasil */}
      {openSuccessModal && (
        <Modal show={openSuccessModal} position="center" onClose={handleCloseSuccess}>
          <Modal.Body>
            <div className="flex flex-col items-center p-6 text-center">
              <div className="mb-4">
                <img src={StickerImage} alt="Berhasil" className="w-16 h-16" />
              </div>
              <h2 className="text-lg font-semibold text-green-700 mb-2">Berhasil</h2>
              <p className="text-gray-600 mb-6">Anda telah menerima masyarakat ini</p>
              <button
                onClick={handleCloseSuccess}
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
