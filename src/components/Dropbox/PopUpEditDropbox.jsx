"use client";

import { useState, useEffect } from "react";
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

export default function PopUpEdit({ dropboxId, onClose, onSuccess }) {
    const [dropboxData, setDropboxData] = useState(null);
    const [newName, setNewName] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newCapacity, setNewCapacity] = useState("");
    const [newLongitude, setNewLongitude] = useState("");
    const [newLatitude, setNewLatitude] = useState("");
    const [openMapModal, setOpenMapModal] = useState(false);
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const fetchDropboxData = async () => {
            try {
                const response = await axios.get(`http://103.41.247.215:8031/api/dropbox/${dropboxId}`, {
                    headers: { 'Cache-Control': 'no-cache' },
                });
                const { name, address, capacity, status, longitude, latitude } = response.data.data;
                setDropboxData({ name, address, capacity, status, longitude, latitude });
                setNewName(name);
                setNewAddress(address);
                setNewCapacity(capacity);
                setNewLongitude(longitude);
                setNewLatitude(latitude);
            } catch (error) {
                console.error("Error fetching dropbox data:", error);
                setError("Failed to fetch dropbox data. Please try again.");
            }
        };
    
        fetchDropboxData();
    }, [dropboxId]);
  
    const handleMapSelection = ({ lat, lng }) => {
        setNewLatitude(lat);
        setNewLongitude(lng);
        setOpenMapModal(false);
      };

    const handleCloseSuccess = () => {
      setOpenSuccessModal(false);
      onClose();
    };
  
    const handleUpdate = async () => {
        setIsLoading(true);
        setError(null);
    
        try {
            const response = await axios.post(`http://103.41.247.215:8031/api/dropbox/update/${dropboxId}`, {
                name: newName,
                address: newAddress,
                capacity: newCapacity,
                longitude: newLongitude,
                latitude: newLatitude,
            });
    
            if (response.data.success) {
                setOpenSuccessModal(true);
                onSuccess();
                setNewName("");
                setNewAddress("");
                setNewCapacity("");
                setNewLongitude("");
                setNewLatitude("");
            } else {
                setError(response.data.message || "Failed to update data. Please try again.");
            }
        } catch (error) {
            console.error("Error updating data:", error);
            setError(error.response?.data?.message || "An error occurred while updating the data.");
        } finally {
            setIsLoading(false);
        }
    };
  
    if (!dropboxData) {
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
          <Modal.Header>Ubah Data Dropbox</Modal.Header>
          <Modal.Body>
                <div className="space-y-4">
                {error && <p className="text-red-600 text-center">{error}</p>}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nama Dropbox</label>
                    <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Alamat</label>
                    <input
                    type="text"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700">Koordinat</label>
                <div className="flex space-x-2">
                    <input
                    type="text"
                    value={newLatitude}
                    readOnly
                    placeholder="Latitude"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                    <input
                    type="text"
                    value={newLongitude}
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
                    value={newCapacity}
                    onChange={(e) => setNewCapacity(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <input
                        type="text"
                        value={dropboxData.status}
                        readOnly
                        className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                          <h2 className="text-lg font-semibold text-green-700 mb-2">Berhasil Mengubah Data</h2>
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
                            <Marker position={[newLatitude || -6.917464, newLongitude || 107.619123]} />
                            <LocationPicker setCoordinates={(coords) => handleMapSelection(coords)} />
                          </MapContainer>
                        </div>
                    </Modal.Body>
            </Modal>
            )}
      </>
    );
  }