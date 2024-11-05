
"use client";

import { Table } from "flowbite-react";
import { HiBell, HiEye } from "react-icons/hi";
import CustomPopUp from "../components/PopUpPermintaanSampah";
import { useState } from "react";

export default function CustomTableKurir() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                <thead className="text-xs text-white uppercase" style={{ backgroundColor: '#42A444', borderBottom: '2px solid #42A444' }}>
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Courier Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Pick Up Location
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Phone Number
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b border-grey hover:bg-green-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            0101
                        </th>
                        <td class="px-6 py-4 text-black">
                            Ambarozi
                        </td>
                        <td class="px-6 py-4 text-black">
                            Jl Ngawi No. 12
                        </td>
                        <td class="px-6 py-4 text-black">
                            081234567890
                        </td>
                        <td class="px-6 py-4 text-black">
                            On Progress
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            0101
                        </th>
                        <td class="px-6 py-4 text-black">
                            Ambarozi
                        </td>
                        <td class="px-6 py-4 text-black">
                            Jl Ngawi No. 12
                        </td>
                        <td class="px-6 py-4 text-black">
                            081234567890
                        </td>
                        <td class="px-6 py-4 text-black">
                            On Progress
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            0101
                        </th>
                        <td class="px-6 py-4 text-black">
                            Ambarozi
                        </td>
                        <td class="px-6 py-4 text-black">
                            Jl Ngawi No. 12
                        </td>
                        <td class="px-6 py-4 text-black">
                            081234567890
                        </td>
                        <td class="px-6 py-4 text-black">
                            On Progress
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            0101
                        </th>
                        <td class="px-6 py-4 text-black">
                            Ambarozi
                        </td>
                        <td class="px-6 py-4 text-black">
                            Jl Ngawi No. 12
                        </td>
                        <td class="px-6 py-4 text-black">
                            081234567890
                        </td>
                        <td class="px-6 py-4 text-black">
                            On Progress
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            0101
                        </th>
                        <td class="px-6 py-4 text-black">
                            Ambarozi
                        </td>
                        <td class="px-6 py-4 text-black">
                            Jl Ngawi No. 12
                        </td>
                        <td class="px-6 py-4 text-black">
                            081234567890
                        </td>
                        <td class="px-6 py-4 text-black">
                            On Progress
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            0101
                        </th>
                        <td class="px-6 py-4 text-black">
                            Ambarozi
                        </td>
                        <td class="px-6 py-4 text-black">
                            Jl Ngawi No. 12
                        </td>
                        <td class="px-6 py-4 text-black">
                            081234567890
                        </td>
                        <td class="px-6 py-4 text-black">
                            On Progress
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            0101
                        </th>
                        <td class="px-6 py-4 text-black">
                            Ambarozi
                        </td>
                        <td class="px-6 py-4 text-black">
                            Jl Ngawi No. 12
                        </td>
                        <td class="px-6 py-4 text-black">
                            081234567890
                        </td>
                        <td class="px-6 py-4 text-black">
                            On Progress
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            0101
                        </th>
                        <td class="px-6 py-4 text-black">
                            Ambarozi
                        </td>
                        <td class="px-6 py-4 text-black">
                            Jl Ngawi No. 12
                        </td>
                        <td class="px-6 py-4 text-black">
                            081234567890
                        </td>
                        <td class="px-6 py-4 text-black">
                            On Progress
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            0101
                        </th>
                        <td class="px-6 py-4 text-black">
                            Ambarozi
                        </td>
                        <td class="px-6 py-4 text-black">
                            Jl Ngawi No. 12
                        </td>
                        <td class="px-6 py-4 text-black">
                            081234567890
                        </td>
                        <td class="px-6 py-4 text-black">
                            On Progress
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            {isModalOpen && <CustomPopUp onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}
