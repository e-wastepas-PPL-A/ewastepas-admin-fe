"use client";

import { useState } from "react";
import { Modal } from "flowbite-react";
import StickerReject from '../../assets/StickerReject.png';

export default function CustomPopUp({ onClose }) {
  const [openConfirmationModal, setOpenConfirmationModal] = useState(true);
  const [openRejectSuccessModal, setOpenRejectSuccessModal] = useState(false);

  const handleCloseConfirmation = () => {
    setOpenConfirmationModal(false);
    onClose();
  };

  const handleReject = () => {
    // Tutup modal konfirmasi dan buka modal "Berhasil Menolak"
    setOpenConfirmationModal(false);
    setOpenRejectSuccessModal(true);
  };

  const handleCloseRejectSuccess = () => {
    setOpenRejectSuccessModal(false);
    onClose();
  };

  return (
    <>
      {/* Modal Konfirmasi Penolakan */}
      {openConfirmationModal && (
        <Modal show={openConfirmationModal} position="center" onClose={handleCloseConfirmation}>
          <Modal.Header>Registrasi Masyarakat</Modal.Header>
          <Modal.Body>
            <p className="text-center mb-6">
              Apakah Anda yakin ingin menolak masyarakat ini?
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
                onClick={handleReject}
                className="flex items-center text-white px-4 py-2 rounded-md font-semibold"
                style={{ backgroundColor: '#005B96' }}
              >
                Ya
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {/* Modal Berhasil Menolak */}
      {openRejectSuccessModal && (
        <Modal show={openRejectSuccessModal} position="center" onClose={handleCloseRejectSuccess}>
          <Modal.Body>
            <div className="flex flex-col items-center p-6 text-center">
              {/* Gambar "Berhasil Menolak" */}
              <div className="mb-4">
                <img src={StickerReject} alt="Berhasil" className="w-24 h-24 mb-4" />
              </div>
              <h2 className="text-lg font-semibold text-red-700 mb-2">Berhasil Ditolak</h2>
              <p className="text-gray-600 mb-6">Anda telah menolak masyarakat ini</p>
              <button
                onClick={handleCloseRejectSuccess}
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