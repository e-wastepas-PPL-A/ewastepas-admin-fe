import { useState } from "react";
import { Modal } from "flowbite-react";
import axios from "axios";
import StickerImage from "../../assets/Sticker.png";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

// Icon untuk marker peta
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function LocationPicker({ setCoordinates }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setCoordinates({ lat, lng });
    },
  });

  return null;
}

export default function PopUpAddDropbox({ onClose, onSuccess }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [districtAddress, setDistrictAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [capacity, setCapacity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openMapModal, setOpenMapModal] = useState(false);

  const districtOptions = ["Bandung Utara", "Bandung Selatan", "Bandung Timur", "Bandung Barat", "Cimahi", "Kabupaten Bandung", "Kabupaten Bandung Barat"];
  // const statusOptions = ["Full", "Available"];

  const handleMapSelection = ({ lat, lng }) => {
    setLatitude(lat);
    setLongitude(lng);
    setOpenMapModal(false);
  };

  const handleSubmit = async () => {
    if (!name || !address || !districtAddress || !longitude || !latitude || !capacity) {
      setError("Semua field wajib diisi!");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://34.16.66.175:8031/api/dropbox/create/", {
        name,
        address,
        district_address: districtAddress,
        longitude,
        latitude,
        capacity,
      });

      if (response.data.success) {
        setOpenSuccessModal(true);
        onSuccess();
      } else {
        setError(response.data.message || "Terjadi kesalahan saat menambah data dropbox.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Gagal menambah data dropbox. Silakan coba lagi.");
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
              <label className="block text-sm font-medium text-gray-700">Koordinat</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={latitude}
                  readOnly
                  placeholder="Latitude"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
                <input
                  type="text"
                  value={longitude}
                  readOnly
                  placeholder="Longitude"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <button
                onClick={() => setOpenMapModal(true)}
                className="mt-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Pilih Titik di Peta
              </button>
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
            {/* <div>
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
            </div> */}
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

        {openMapModal && (
          <Modal show={true} position="center" onClose={() => setOpenMapModal(false)}>
            <Modal.Header>Pilih Titik di Peta</Modal.Header>
            <Modal.Body>
              <div className="h-96">
                <MapContainer center={[-6.917464, 107.619123]} zoom={13} style={{ height: "100%", width: "100%" }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[latitude || -6.917464, longitude || 107.619123]} />
                  <LocationPicker setCoordinates={(coords) => handleMapSelection(coords)} />
                </MapContainer>
              </div>
            </Modal.Body>
          </Modal>
        )}
    </>
  );
}
