"use client";

import { useState } from "react";
import { Modal } from "flowbite-react";
import axios from "axios";
import StickerReject from '../../assets/StickerReject.png';

export default function RejectKurirPopUp({ onClose, courierId, onSuccess }) {
  const [openConfirmationModal, setOpenConfirmationModal] = useState(true);
  const [openRejectSuccessModal, setOpenRejectSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseConfirmation = () => {
    setOpenConfirmationModal(false);
    onClose();
  };

  const handleReject = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("status", "Reject");

      const response = await axios.post(`http://127.0.0.1:8000/api/courier/update-status/${courierId}`, formData);
      if (response.data.success) {
        // Tutup modal konfirmasi dan buka modal sukses
        setOpenConfirmationModal(false);
        setOpenRejectSuccessModal(true);
        // Callback untuk memperbarui data
        onSuccess();
      } else {
        alert("Gagal menolak data kurir: " + response.data.message);
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim permintaan reject:", error);
      alert("Terjadi kesalahan saat menolak data kurir.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseRejectSuccess = () => {
    setOpenRejectSuccessModal(false);
    onClose();
  };

  return (
    <>
      {/* Modal Konfirmasi Reject */}
      {openConfirmationModal && (
        <Modal show={openConfirmationModal} position="center" onClose={handleCloseConfirmation}>
          <Modal.Header>Registrasi Kurir</Modal.Header>
          <Modal.Body>
            <p className="text-center mb-6">
              Apakah Anda yakin ingin menolak kurir ini?
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
                className={`flex items-center text-white px-4 py-2 rounded-md font-semibold ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                style={{ backgroundColor: "#005B96" }}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Ya"}
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {/* Modal Berhasil Reject */}
      {openRejectSuccessModal && (
        <Modal show={openRejectSuccessModal} position="center" onClose={handleCloseRejectSuccess}>
          <Modal.Body>
            <div className="flex flex-col items-center p-6 text-center">
              <img src={StickerReject} alt="Berhasil" className="w-24 h-24 mb-4" />
              <h2 className="text-lg font-semibold text-red-700 mb-2">Berhasil Menolak</h2>
              <p className="text-gray-600 mb-6">Anda telah menolak kurir ini</p>
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
