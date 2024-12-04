import { useState } from "react";
import { Modal } from "flowbite-react";
import axios from "axios";
import StickerImage from "../../assets/Sticker.png";

export default function PopUpAddDropbox({ onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [districtAddress, setDistrictAddress] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [capacity, setCapacity] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const districtOptions = ["Bandung Utara", "Bandung Selatan", "Bandung Timur", "Bandung Barat", "Cimahi", "Kabupaten Bandung", "Kabupaten Bandung Barat"];
  const statusOptions = ["Full", "Available"];

  const handleSubmit = async () => {
    if (!name || !address || !districtAddress || !longitude || !latitude || !capacity || !status) {
      setError("Semua field wajib diisi!");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/dropbox/create/", {
        name,
        address,
        district_address: districtAddress,
        longitude,
        latitude,
        capacity,
        status,
      });

      if (response.data.success) {
        setOpenSuccessModal(true);
        onSuccess();
      } else {
        setError(response.data.message || "Terjadi kesalahan saat menambah data dropbox.");
      }
    } catch (err) {
      setError("Gagal menambah data dropbox. Silakan coba lagi.");
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
        <Modal.Header>Tambah Data Dropbox</Modal.Header>
        <Modal.Body>
            <div className="space-y-4">
            {error && <p className="text-red-600 text-center">{error}</p>}
            <div>
                <label className="block text-sm font-medium text-gray-700">Nama Dropbox</label>
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Alamat</label>
                <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Alamat Distrik</label>
                <select
                value={districtAddress}
                onChange={(e) => setDistrictAddress(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                <option value="">Pilih Distrik</option>
                {districtOptions.map((option, index) => (
                    <option key={index} value={option}>
                    {option}
                    </option>
                ))}
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Longitude</label>
                <input
                type="text"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Latitude</label>
                <input
                type="text"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Kapasitas</label>
                <input
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">Pilih Status</option>
                  {statusOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
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
                    {isLoading ? "Saving..." : "Tambah Dropbox"}
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
                        <p className="text-gray-600 mb-6">Anda telah menambah data dropbox</p>
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
