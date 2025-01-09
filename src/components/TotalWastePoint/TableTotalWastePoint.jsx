"use client";

import { useEffect, useState } from "react";
import { HiEye } from "react-icons/hi";
import CustomSearchbar from "../TotalWastePoint/SearchPoint"; 
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

export default function TableTWP() {
    const [pickups, setPickups] = useState([]);
    const [filteredPickups, setFilteredPickups] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://34.16.66.175:8031/api/total-poin")
            .then(response => {
                if (response.data.success) {
                    // Accessing the pickups data correctly
                    setPickups(response.data.data.pickups.data);
                    setFilteredPickups(response.data.data.pickups.data);
                }
            })
            .catch(error => {
                console.error("Error fetching pickup data:", error);
            });
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = pickups.filter(pickup =>
            pickup.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPickups(filtered);
    };

    const handleNavigate = (pickupId) => {
        navigate(`/detail-point/${pickupId}`); 
    };

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <CustomSearchbar onSearch={handleSearch} />
            <div className="max-h-96 overflow-y-auto">
                <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                    <thead className="text-xs text-white uppercase" style={{ backgroundColor: '#42A444', borderBottom: '2px solid #42A444' }}>
                        <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Customer Name</th>
                            <th scope="col" className="px-6 py-3">Total Point</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPickups.map(pickup => (
                            <tr className="bg-white border-b border-grey hover:bg-green-100" key={pickup.pickup_id}>
                                <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                                    <span 
                                        onClick={() => handleNavigate(pickup.pickup_id)} 
                                        className="cursor-pointer"
                                    >
                                        {pickup.pickup_id}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-black">
                                    <span 
                                        onClick={() => handleNavigate(pickup.pickup_id)} 
                                        className="cursor-pointer"
                                    >
                                        {pickup.name} 
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-black">
                                    <span 
                                        onClick={() => handleNavigate(pickup.pickup_id)} 
                                        className="cursor-pointer"
                                    >
                                        {pickup.point}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span 
                                        onClick={() => handleNavigate(pickup.pickup_id)} 
                                        className="font-medium text-black hover:underline cursor-pointer"
                                    >
                                        <HiEye className="w-5 h-5" />
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
