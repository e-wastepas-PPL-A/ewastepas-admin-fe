"use client";

import { useEffect, useState } from "react";
import { HiEye } from "react-icons/hi";
import axios from "axios";
import CustomPopUp from "../DetailPoint/PopUpDetailPoin";
import CustomSearchbar from "../DetailPoint/SearchDetailPoin";

export default function CustomTableDetailPoint({ pickupDetail }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPickup, setSelectedPickup] = useState(null);
    const [filteredPickups, setFilteredPickups] = useState(pickupDetail);
    const [searchTerm, setSearchTerm] = useState("");

    if (!pickupDetail || pickupDetail.length === 0) {
        return <div>No data available</div>;
    }

    const handleEyeClick = (pickupId) => {
        axios.get(`https://admin-api.ewhale.my.id/api/total-poin/${pickupId}/customer`)
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
        setSearchTerm(searchTerm);
        const filtered = pickupDetail.filter(pickup =>
            pickup.pickup_id.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPickups(filtered);
    };

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <CustomSearchbar
                searchTerm={searchTerm}
                onSearch={handleSearch}
            />
            <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                <thead className="text-xs text-white uppercase" style={{ backgroundColor: '#42A444', borderBottom: '2px solid #42A444' }}>
                    <tr>
                        <th scope="col" className="px-6 py-3">ID Pickup</th>
                        <th scope="col" className="px-6 py-3">Total Sampah</th>
                        <th scope="col" className="px-6 py-3">Poin</th>
                        <th scope="col" className="px-6 py-3">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPickups.length > 0 ? (
                        filteredPickups.map((detail, index) => (
                            <tr key={index} className="bg-white border-b border-grey hover:bg-green-100">
                                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                                    {detail.pickup_id}
                                </th>
                                <td className="px-6 py-4 text-black">
                                    {detail.quantity || "N/A"}
                                </td>
                                <td className="px-6 py-4 text-black">
                                    {detail.points || "N/A"}
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-black hover:underline" onClick={() => handleEyeClick(detail.pickup_id)}>
                                        <HiEye className="w-5 h-5" />
                                    </a>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center text-black">Tidak ada data tersedia</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {isModalOpen && <CustomPopUp onClose={() => setIsModalOpen(false)} pickupData={selectedPickup} />}
        </div>
    );
}