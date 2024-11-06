"use client";

import { HiUser, HiCheck, HiX } from "react-icons/hi";
import { Table } from "flowbite-react";
import { useState } from "react";
import CustomPopUp from "./PopUpApprovalMasyarakat";
import CUstomPopUpReject from "./PopUpRejectMasyarakat";

export default function CustomTable() {
  const [modalType, setModalType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApprovalClick = () => {
    setModalType("approval");
    setIsModalOpen(true);
  };

  const handleRejectClick = () => {
    setModalType("reject");
    setIsModalOpen(true);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <Table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead className="text-xs text-white uppercase" style={{ backgroundColor: '#42A444', borderBottom: '2px solid #42A444' }}>
          <tr>
            <th scope="col" className="px-6 py-2 text-center">Foto</th>
            <th scope="col" className="px-6 py-3">Nama Pelanggan</th>
            <th scope="col" className="px-6 py-3">No Telepon</th>
            <th scope="col" className="px-6 py-3">Alamat</th>
            <th scope="col" className="px-6 py-3">Tempat Tanggal Lahir</th>
            <th scope="col" className="px-10 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {Array(10).fill().map((_, index) => (
            <tr key={index} className="bg-white border-b border-grey hover:bg-green-100">
              <td className="py-2 px-4 border-b text-center">
                <input type="checkbox" className="mr-2" />
                <HiUser className="inline-block text-gray-600" size={40} />
              </td>
              <td className="py-2 px-4 border-b">Nama {index + 1}</td>
              <td className="py-2 px-4 border-b">085765656{index}</td>
              <td className="py-2 px-4 border-b">Alamat {index + 1}</td>
              <td className="py-2 px-4 border-b">Bandung, 12/08/2023</td>
              <td className="py-2 px-4 border-b text-center flex items-center justify-center">
                <button
                  className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-700"
                  title="Ceklis (Approval)"  
                  onClick={handleApprovalClick}
                >
                  <HiCheck size={20} />
                </button>
                <button
                  className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 ml-2"
                  title="Silang (Reject)"  
                  onClick={handleRejectClick}
                >
                  <HiX size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {isModalOpen && modalType === "approval" && <CustomPopUp onClose={() => setIsModalOpen(false)} />}
      {isModalOpen && modalType === "reject" && <CUstomPopUpReject onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
