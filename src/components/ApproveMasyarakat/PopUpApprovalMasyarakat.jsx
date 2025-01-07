"use client";

import { useState } from "react";
import { Modal } from "flowbite-react";
import StickerImage from "../../assets/Sticker.png";
import axios from "axios";

export default function CustomPopUp({ onClose, masyarakatId, onSuccess }) {
  const [openConfirmationModal, setOpenConfirmationModal] = useState(true);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseConfirmation = () => {
    setOpenConfirmationModal(false);
    onClose();
  };

  const handleApprove = async () => {
    setIsLoading(true);
    try {
      const updateData = {
        is_verified: 1,
      };

      const response = await axios.post(`http://34.16.66.175:8031/api/community/update-status/${masyarakatId}`, updateData);
      if (response.data.success) {
        // Tutup modal konfirmasi dan buka modal sukses
        setOpenConfirmationModal(false);
        setOpenSuccessModal(true);
        // Callback untuk memperbarui data
        onSuccess();
      } else {
        alert("Gagal menyetujui data masyarakat: " + response.data.message);
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim permintaan approval:", error);

      // Cek apakah ada respons dari server dan tampilkan pesan error-nya
      const errorMessage =
        error.response.data.message ||
        "Terjadi kesalahan saat menyetujui masyarakat.";
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
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

      {/* Modal Berhasil */}
      {openSuccessModal && (
        <Modal show={openSuccessModal} position="center" onClose={handleCloseSuccess}>
          <Modal.Body>
            <div className="flex flex-col items-center p-6 text-center">
              {/* Gambar Berhasil */}
              <div className="mb-4">
                <img src={StickerImage} alt="Berhasil" className="w-24 h-24 mb-4" />
              </div>
              <h2 className="text-lg font-semibold text-green-700 mb-2">Berhasil Diterima</h2>
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
