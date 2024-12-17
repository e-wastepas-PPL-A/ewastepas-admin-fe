"use client";

import { Table } from "flowbite-react";
import { HiEye } from "react-icons/hi";
import CustomPopUp from "./PopUpPermintaanSampah";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CustomTable() {
    const [pickups, setPickups] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPickup, setSelectedPickup] = useState(null);

    useEffect(() => {
        axios.get("http://34.16.66.175:8031/api/dashboard/pickup/user")
            .then(response => {
                if (response.data.success) {
                    setPickups(response.data.data.pickups.data);
                }
            })
            .catch(error => {
                console.error("Error fetching pickup data:", error);
            });
    }, []);

    const handleEyeClick = (pickupId) => {
        axios.get(`http://34.16.66.175:8031/api/dashboard/pickup/${pickupId}`)
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

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                <thead className="text-xs text-white uppercase" style={{ backgroundColor: '#42A444', borderBottom: '2px solid #42A444' }}>
                    <tr>
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Customer Name</th>
                        <th scope="col" className="px-6 py-3">Total Waste</th>
                        <th scope="col" className="px-6 py-3">Pick Up Location</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pickups.map(pickup => (
                        <tr className="bg-white border-b border-grey hover:bg-green-100" key={pickup.pickup_id}>
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                                {pickup.pickup_id}
                            </th>
                            <td className="px-6 py-4 text-black">
                                {pickup.community.name} 
                            </td>
                            <td className="px-6 py-4 text-black">
                                {pickup.waste_total || 0} 
                            </td>
                            <td className="px-6 py-4 text-black">
                                {pickup.pickup_address}
                            </td>
                            <td className="px-6 py-4 text-black">
                                {pickup.pickup_status}
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
    );
}
