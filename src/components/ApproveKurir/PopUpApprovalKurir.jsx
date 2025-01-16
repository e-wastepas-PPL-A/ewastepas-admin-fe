"use client";

import { useState } from "react";
import { Modal } from "flowbite-react";
import StickerImage from '../../assets/Sticker.png';
import axios from "axios";

export default function ApproveKurirPopUp({ onClose, courierId, onSuccess }) {
  const [openConfirmationModal, setOpenConfirmationModal] = useState(true);
  const [openApproveSuccessModal, setOpenApproveSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseConfirmation = () => {
    setOpenConfirmationModal(false);
    onClose();
  };

  const handleApprove = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("is_verified", "1");

      const response = await axios.post(`http://103.41.247.215:8031/api/courier/update-status/${courierId}`, formData);
      if (response.data.success) {
        // Tutup modal konfirmasi dan buka modal sukses
        setOpenConfirmationModal(false);
        setOpenApproveSuccessModal(true);
        // Callback untuk memperbarui data
        onSuccess();
      } else {
        alert("Gagal menyetujui data kurir: " + response.data.message);
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim permintaan approval:", error);

      // Cek apakah ada respons dari server dan tampilkan pesan error-nya
      const errorMessage =
        error.response.data.message ||
        "Terjadi kesalahan saat menyetujui data kurir.";
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
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

      {/* Modal Berhasil Approve */}
      {openApproveSuccessModal && (
        <Modal show={openApproveSuccessModal} position="center" onClose={handleCloseApproveSuccess}>
          <Modal.Body>
            <div className="flex flex-col items-center p-6 text-center">
              <img src={StickerImage} alt="Berhasil" className="w-24 h-24 mb-4" />
              <h2 className="text-lg font-semibold text-green-700 mb-2">Berhasil Diterima</h2>
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