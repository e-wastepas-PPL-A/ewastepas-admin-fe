
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
                <thead className="text-xs text-white uppercase" style={{ backgroundColor: '#106EBE', borderBottom: '2px solid #106EBE' }}>
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nama Pelanggan
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Tanggal Permintaan
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Jumlah Sampah
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status Permintaan
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nama Kurir
                        </th>
                        <th scope="col" class="px-6 py-3">
                            No Telp
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            Faqih Diddy
                        </th>
                        <td class="px-6 py-4 text-black">
                            12 September 2024
                        </td>
                        <td class="px-6 py-4 text-black">
                            12
                        </td>
                        <td class="px-6 py-4 text-black">
                            Diproses
                        </td>
                        <td class="px-6 py-4 text-black">
                            Rusdi Sigma
                        </td>
                        <td class="px-6 py-4 text-black">
                            08123456789
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            Daffa Skibidi
                        </th>
                        <td class="px-6 py-4 text-black">
                            12 September 2024
                        </td>
                        <td class="px-6 py-4 text-black">
                            12
                        </td>
                        <td class="px-6 py-4 text-black">
                            Diproses
                        </td>
                        <td class="px-6 py-4 text-black">
                            Rusdi Sigma
                        </td>
                        <td class="px-6 py-4 text-black">
                            08123456789
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            Muhammad Ambarozi
                        </th>
                        <td class="px-6 py-4 text-black">
                            12 September 2024
                        </td>
                        <td class="px-6 py-4 text-black">
                            12
                        </td>
                        <td class="px-6 py-4 text-black">
                            Diproses
                        </td>
                        <td class="px-6 py-4 text-black">
                            Rusdi Sigma
                        </td>
                        <td class="px-6 py-4 text-black">
                            08123456789
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            Syahnan Gyatt
                        </th>
                        <td class="px-6 py-4 text-black">
                            12 September 2024
                        </td>
                        <td class="px-6 py-4 text-black">
                            12
                        </td>
                        <td class="px-6 py-4 text-black">
                            Diproses
                        </td>
                        <td class="px-6 py-4 text-black">
                            Rusdi Sigma
                        </td>
                        <td class="px-6 py-4 text-black">
                            08123456789
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            Barra Alkhasyani Permana
                        </th>
                        <td class="px-6 py-4 text-black">
                            12 September 2024
                        </td>
                        <td class="px-6 py-4 text-black">
                            12
                        </td>
                        <td class="px-6 py-4 text-black">
                            Diproses
                        </td>
                        <td class="px-6 py-4 text-black">
                            Rusdi Sigma
                        </td>
                        <td class="px-6 py-4 text-black">
                            08123456789
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            Adnan Rizz Purnomo
                        </th>
                        <td class="px-6 py-4 text-black">
                            12 September 2024
                        </td>
                        <td class="px-6 py-4 text-black">
                            12
                        </td>
                        <td class="px-6 py-4 text-black">
                            Diproses
                        </td>
                        <td class="px-6 py-4 text-black">
                            Rusdi Sigma
                        </td>
                        <td class="px-6 py-4 text-black">
                            08123456789
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            Gilman Raja Mewing
                        </th>
                        <td class="px-6 py-4 text-black">
                            12 September 2024
                        </td>
                        <td class="px-6 py-4 text-black">
                            12
                        </td>
                        <td class="px-6 py-4 text-black">
                            Diproses
                        </td>
                        <td class="px-6 py-4 text-black">
                            Rusdi Sigma
                        </td>
                        <td class="px-6 py-4 text-black">
                            08123456789
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            Raden Sugeng Mulyono
                        </th>
                        <td class="px-6 py-4 text-black">
                            12 September 2024
                        </td>
                        <td class="px-6 py-4 text-black">
                            12
                        </td>
                        <td class="px-6 py-4 text-black">
                            Diproses
                        </td>
                        <td class="px-6 py-4 text-black">
                            Rusdi Sigma
                        </td>
                        <td class="px-6 py-4 text-black">
                            08123456789
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            Kipli
                        </th>
                        <td class="px-6 py-4 text-black">
                            12 September 2024
                        </td>
                        <td class="px-6 py-4 text-black">
                            12
                        </td>
                        <td class="px-6 py-4 text-black">
                            Diproses
                        </td>
                        <td class="px-6 py-4 text-black">
                            Rusdi Sigma
                        </td>
                        <td class="px-6 py-4 text-black">
                            08123456789
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            Fufufafa
                        </th>
                        <td class="px-6 py-4 text-black">
                            12 September 2024
                        </td>
                        <td class="px-6 py-4 text-black">
                            12
                        </td>
                        <td class="px-6 py-4 text-black">
                            Diproses
                        </td>
                        <td class="px-6 py-4 text-black">
                            Rusdi Sigma
                        </td>
                        <td class="px-6 py-4 text-black">
                            08123456789
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" className="font-medium text-black hover:underline" onClick={() => setIsModalOpen(true)}>
                                <HiEye className="w-5 h-5" />
                            </a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b border-grey hover:bg-blue-100">
                        <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                            John Doe
                        </th>
                        <td class="px-6 py-4 text-black">
                            12 September 2024
                        </td>
                        <td class="px-6 py-4 text-black">
                            12
                        </td>
                        <td class="px-6 py-4 text-black">
                            Diproses
                        </td>
                        <td class="px-6 py-4 text-black">
                            Rusdi Sigma
                        </td>
                        <td class="px-6 py-4 text-black">
                            08123456789
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
