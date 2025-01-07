"use client";

import { useState } from "react";
import { Modal } from "flowbite-react";
import StickerImage from "../../assets/StickerDelete.png";
import axios from "axios";

export default function PopUpDelete({ onClose, wasteId, onSuccess }) {
  const [openConfirmationModal, setOpenConfirmationModal] = useState(true);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseConfirmation = () => {
    setOpenConfirmationModal(false);
    onClose();
  };

  const handleDelete = async () => {
    setIsLoading(true);

    try {
      const deleteJenisSampah = axios.delete(
        `http://34.16.66.175:8031/api/waste/delete/${wasteId}`
      );

      const [responseJenis] = await Promise.all([
        deleteJenisSampah
      ]);

      if (responseJenis.data.success) {
        setOpenConfirmationModal(false);
        setOpenSuccessModal(true);
        onSuccess();
      } else {
        alert(
          "Gagal menghapus data: " +
            (responseJenis.data.message)
        );
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat menghapus data:", error);
      alert("Terjadi kesalahan saat menghapus data.");
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
          <Modal.Header>Hapus Data</Modal.Header>
          <Modal.Body>
            <p className="text-center mb-6">
            Apakah Anda yakin ingin menghapus data ini?
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleCloseConfirmation}
                className="flex items-center text-white px-4 py-2 rounded-md font-semibold"
                style={{ backgroundColor: "#E72929" }}
              >
                Tidak
              </button>
              <button
                onClick={handleDelete}
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
              <div className="mb-4">
                <img src={StickerImage} alt="Berhasil" className="w-24 h-24 mb-4" />
              </div>
              <h2 className="text-lg font-semibold text-green-700 mb-2" style={{ color: '#E72929'}}>Berhasil Menghapus Data</h2>
              <p className="text-gray-600 mb-6">Anda telah menghapus data sampah</p>
              <button
                onClick={handleCloseSuccess}
                className="px-4 py-2 text-white font-semibold rounded-md"
                style={{ backgroundColor: "#005B96" }}
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
