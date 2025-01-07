import { useState } from "react";
import { Modal } from "flowbite-react";
import axios from "axios";
import StickerImage from "../../assets/Sticker.png";

export default function PopUpAddJenisKategori({ onClose, onSuccess }) {
  const [wasteName, setWasteName] = useState("");
  const [wasteTypeId, setWasteTypeId] = useState("");
  const [description, setDescription] = useState("");
  const [point, setPoint] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const wasteTypeOptions = ["1", "2", "3", "4", "5", "6"];

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!wasteName || !wasteTypeId || !description || !point || !image) {
      setError("Semua field wajib diisi!");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("waste_name", wasteName);
      formData.append("category", wasteTypeId);
      formData.append("waste_type_id", wasteTypeId);
      formData.append("description", description);
      formData.append("point", point);
      formData.append("image", image);

      const response = await axios.post("http://34.16.66.175:8031/api/waste/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setOpenSuccessModal(true);
        onSuccess();
      } else {
        setError(response.data.message || "Terjadi kesalahan saat menambah data sampah elektronik.");
      }
    } catch (err) {
      setError("Gagal menambah data sampah elektronik. Silakan coba lagi.");
      console.error(err);
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
      <Modal show={true} position="center" onClose={onClose}>
        <Modal.Header>Tambah Data Sampah Elektronik</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            {error && <p className="text-red-600 text-center">{error}</p>}
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Sampah</label>
              <input
                type="text"
                value={wasteName}
                onChange={(e) => setWasteName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Kategori Sampah</label>
              <select
                value={wasteTypeId}
                onChange={(e) => setWasteTypeId(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Pilih Kategori</option>
                {wasteTypeOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Poin</label>
              <input
                type="text"
                value={point}
                onChange={(e) => setPoint(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Unggah Gambar</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-full text-gray-700 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-center space-x-4 w-full">
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              style={{ backgroundColor: "#005B96" }}
              className={`px-4 py-2 text-white rounded-md ${isLoading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"}`}
            >
              {isLoading ? "Saving..." : "Tambah Data"}
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
              <h2 className="text-lg font-semibold text-green-700 mb-2">Berhasil Menambah Data</h2>
              <p className="text-gray-600 mb-6">Anda telah menambah data sampah elektronik</p>
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
