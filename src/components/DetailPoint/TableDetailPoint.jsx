"use client";

import { useEffect, useState } from "react";
import { HiEye } from "react-icons/hi";
import CustomPopUp from "../PermintaanSampah/PopUpPermintaanSampah";
import axios from "axios";

export default function CustomTableDetailPoint({ id }) { 
    const [pickupDetail, setPickupDetail] = useState(null); // Change to hold single pickup detail
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (id) {
            axios.get(`http://34.16.66.175:8031/api/total-poin/${id}`)
                .then(response => {
                    if (response.data.success) {
                        setPickupDetail(response.data.data); // Set pickupDetail to the data object
                    }
                })
                .catch(error => {
                    console.error("Error fetching pickup data:", error);
                });
        }
    }, [id]);

    if (!pickupDetail) {
        return <div>Loading...</div>; // Handle loading state
    }

    const { pickup_detail } = pickupDetail; // Destructure pickup_detail from pickupDetail

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                <thead className="text-xs text-white uppercase" style={{ backgroundColor: '#42A444', borderBottom: '2px solid #42A444' }}>
                    <tr>
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Waste Name</th>
                        <th scope="col" className="px-6 py-3">Quantity</th>
                        <th scope="col" className="px-6 py-3">Points</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pickup_detail.map(detail => (
                        <tr className="bg-white border-b border-grey hover:bg-green-100" key={detail.waste_id}>
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                                {detail.pickup_id}
                            </th>
                            <td className="px-6 py-4 text-black">
                                {detail.waste.waste_name} {/* Access waste name */}
                            </td>
                            <td className="px-6 py-4 text-black">
                                {detail.quantity} {/* Display quantity */}
                            </td>
                            <td className="px-6 py-4 text-black">
                                {detail.points} {/* Display points */}
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                    <HiEye className="w-5 h-5" />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && <CustomPopUp onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}
