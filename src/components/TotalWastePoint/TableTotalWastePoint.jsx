"use client";

import { Table } from "flowbite-react";
import { HiEye } from "react-icons/hi";
import CustomPopUp from "../PermintaanSampah/PopUpPermintaanSampah";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TableTWP() {
    const [pickups, setPickups] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get("http://34.16.66.175:8031/api/dashboard/waste-point/")
            .then(response => {
                if (response.data.success) {
                    setPickups(response.data.data.pickups.data);
                }
            })
            .catch(error => {
                console.error("Error fetching pickup data:", error);
            });
    }, []);

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                <thead className="text-xs text-white uppercase" style={{ backgroundColor: '#42A444', borderBottom: '2px solid #42A444' }}>
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Customer Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Point
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {pickups.map(pickup => (
                        <tr className="bg-white border-b border-grey hover:bg-green-100" key={pickup.pickup_id}>
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                                {pickup.pickup_id}
                            </th>
                            <td className="px-6 py-4 text-black">
                                {pickup.name} {/* Accessing customer name directly */}
                            </td>
                            <td className="px-6 py-4 text-black">
                                {pickup.pickup_detail.length > 0 ? pickup.pickup_detail[0].points : 0} {/* Accessing points from pickup_detail */}
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
