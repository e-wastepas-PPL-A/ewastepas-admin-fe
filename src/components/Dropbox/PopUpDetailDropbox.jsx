"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { HiTrash } from "react-icons/hi";

export default function DetailDropbox({ dropboxId, onClose }) {
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDetailDropbox = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://admin-api.ewhale.my.id/api/dropbox/${dropboxId}`);
      if (response.data.success) {
        setDetail(response.data.data);
      } else {
        console.error("Gagal mengambil detail dropbox:", response.data.message);
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil detail dropbox:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDetailDropbox();
  }, [dropboxId]);

  if (isLoading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (!detail) {
    return <div className="text-center py-4">Data tidak ditemukan</div>;
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-4/5 md:w-2/3 lg:w-1/2 p-6 relative">
        {/* Tombol Close Modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-gray-700"
        >
          &#x2715;
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Lihat Data Dropbox</h2>

        {/* Tabel Data Detail */}
        <table className="w-full border-collapse border border-gray-300">
          <tbody>
            <tr className="bg-gray-100">
              <td className="p-2 font-semibold border border-gray-300">Nama Dropbox</td>
              <td className="p-2 border border-gray-300">{detail.name}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold border border-gray-300">Alamat</td>
              <td className="p-2 border border-gray-300">{detail.address}</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="p-2 font-semibold border border-gray-300">Longitude</td>
              <td className="p-2 border border-gray-300">{detail.longitude}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold border border-gray-300">Latitude</td>
              <td className="p-2 border border-gray-300">{detail.latitude}</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="p-2 font-semibold border border-gray-300">Kuantitas</td>
              <td className="p-2 border border-gray-300">{detail.capacity}/100</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold border border-gray-300">Status</td>
              <td className="p-2 border border-gray-300">{detail.status}</td>
            </tr>
          </tbody>
        </table>

        {/* Tabel Detail Jenis Sampah */}
        <h3 className="text-lg font-semibold mt-6 mb-2">Detail Jenis Sampah</h3>
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="p-2 border border-gray-300">No</th>
              <th className="p-2 border border-gray-300">Nama</th>
              <th className="p-2 border border-gray-300">Alamat</th>
              <th className="p-2 border border-gray-300">Jenis Sampah</th>
              <th className="p-2 border border-gray-300">Jumlah</th>
              <th className="p-2 border border-gray-300">Point</th>
              {/* <th className="p-2 border border-gray-300">Aksi</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300">1</td>
              <td className="p-2 border border-gray-300">{detail.nama}</td>
              <td className="p-2 border border-gray-300">{detail.alamat}</td>
              <td className="p-2 border border-gray-300">{detail.jenis_sampah}</td>
              <td className="p-2 border border-gray-300">{detail.jumlah}</td>
              <td className="p-2 border border-gray-300">{detail.point}</td>
              {/* <td className="p-2 border border-gray-300">
                <button
                  className="text-red-600 hover:text-red-800"
                  title="Hapus"
                >
                  <HiTrash size={24} />
                </button>
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
