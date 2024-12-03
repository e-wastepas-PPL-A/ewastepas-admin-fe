"use client";

import { useState, useEffect } from "react";
import { Modal } from "flowbite-react";
import axios from "axios";
import StickerImage from "../../assets/Sticker.png";

export default function PopUpEdit({ wasteId, onClose, onSuccess }) {
  const [wasteData, setWasteData] = useState(null);
  const [newPoint, setNewPoint] = useState("");
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWasteData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/waste/${wasteId}`);
        const { waste_name, waste_type_id, point } = response.data.data;
        setWasteData({
          waste_name,
          waste_type_id,
          point,
        });
        setNewPoint(point);
      } catch (error) {
        console.error("Error fetching waste data:", error);
        setError("Failed to fetch waste data. Please try again.");
      }
    };

    fetchWasteData();
  }, [wasteId]);

  const handleCloseSuccess = () => {
    setOpenSuccessModal(false);
    onClose();
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/waste_convert/update/${wasteId}`, {
        point: newPoint,
      });

      if (response.data.success) {
        setOpenSuccessModal(true);
        onSuccess();
      } else {
        setError("Failed to update data. Please try again.");
      }
    } catch (error) {
      console.error("Error updating data:", error);
      setError("An error occurred while updating the data.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!wasteData) {
    return (
      <Modal show={true} position="center" onClose={onClose}>
        <Modal.Body>
          <p>Loading...</p>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
        <Modal show={true} position="center" onClose={onClose}>
        <Modal.Header>Ubah Data Konversi Sampah Elektronik</Modal.Header>
        <Modal.Body>
            <div className="space-y-4">
                {error && <p className="text-red-600 text-center">{error}</p>}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Jenis Sampah</label>
                    <input
                        type="text"
                        value={wasteData.waste_name}
                        readOnly
                        className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Kategori Sampah</label>
                    <input
                        type="text"
                        value={wasteData.waste_type_id}
                        readOnly
                        className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Poin</label>
                    <input
                        type="number"
                        value={newPoint}
                        onChange={(e) => setNewPoint(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <div className="flex justify-center space-x-4 w-full">
                <button
                    onClick={handleUpdate}
                    style={{ backgroundColor: "#005B96" }}
                    className={`px-4 py-2 text-white rounded-md ${
                        isLoading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
                    }`}
                    disabled={isLoading}
                >
                    {isLoading ? "Saving..." : "Ubah Data"}
                </button>
            </div>
        </Modal.Footer>
        </Modal>

        {/* Modal Berhasil */}
        {openSuccessModal && (
            <Modal show={openSuccessModal} position="center" onClose={handleCloseSuccess}>
                <Modal.Body>
                    <div className="flex flex-col items-center p-6 text-center">
                        <div className="mb-4">
                            <img src={StickerImage} alt="Berhasil" className="w-24 h-24 mb-4" />
                        </div>
                        <h2 className="text-lg font-semibold text-green-700 mb-2" style={{ color: '#E72929'}}>Berhasil Mengubah Data</h2>
                        <p className="text-gray-600 mb-6">Anda telah mengubah poin sampah</p>
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
