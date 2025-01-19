"use client";

import { Table } from "flowbite-react";
import { HiEye } from "react-icons/hi";
import CustomPopUp from "./PopUpPermintaanSampah";
import CustomSearchbar from "../PermintaanSampah/SearchPermintaanSampah"; 
import { useEffect, useState } from "react";
import axios from "axios";

export default function CustomTable() {
    const [pickups, setPickups] = useState([]);
    const [filteredPickups, setFilteredPickups] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPickup, setSelectedPickup] = useState(null);

    useEffect(() => {
        axios.get("https://admin-api.ewhale.my.id/api/permintaan-penjemputan")
            .then(response => {
                if (response.data.success) {
                    setPickups(response.data.data.pickups.data);
                    setFilteredPickups(response.data.data.pickups.data);
                }
            })
            .catch(error => {
                console.error("Error fetching pickup data:", error);
            });
    }, []);

    const handleEyeClick = (pickupId) => {
        axios.get(`https://admin-api.ewhale.my.id/api/permintaan-penjemputan/${pickupId}`)
            .then(response => {
                if (response.data.success) {
                    setSelectedPickup(response.data.data);
                    setIsModalOpen(true);
                }
            })
            .catch(error => {
                console.error("Error fetching pickup details:", error);
            });
    };

    const handleSearch = (searchTerm) => {
        const filtered = pickups.filter(pickup =>
            pickup.customer_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPickups(filtered);
    };

    return (
        <div>
            <CustomSearchbar onSearch={handleSearch} />
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                    <thead className="text-xs text-white uppercase" style={{ backgroundColor: '#42A444', borderBottom: '2px solid #42A444' }}>
                        <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Nama Pelanggan</th>
                            <th scope="col" className="px-6 py-3">Total Sampah</th>
                            <th scope="col" className="px-6 py-3">Lokasi Pengambilan</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPickups.map(pickup => (
                            <tr className="bg-white border-b border-grey hover:bg-green-100" key={pickup.pickup_id}>
                                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                                    {pickup.pickup_id}
                                </th>
                                <td className="px-6 py-4 text-black">
                                    {pickup.customer_name} 
                                </td>
                                <td className="px-6 py-4 text-black">
                                    {pickup.total_waste || 0} 
                                </td>
                                <td className="px-6 py-4 text-black">
                                    {pickup.pickup_address || "N/A"} 
                                </td>
                                <td className="px-6 py-4 text-black">
                                    {pickup.status}
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-black hover:underline" onClick={() => handleEyeClick(pickup.pickup_id)}>
                                        <HiEye className="w-5 h-5" />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {isModalOpen && <CustomPopUp onClose={() => setIsModalOpen(false)} pickupData={selectedPickup} />}
            </div>
        </div>
    );
}
