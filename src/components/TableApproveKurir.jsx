"use client";

import { HiCheck, HiX } from "react-icons/hi";
import { Table } from "flowbite-react";

export default function CourierApprovalTable() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <Table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead className="text-xs text-white uppercase" style={{ backgroundColor: '#106EBE', borderBottom: '2px solid #106EBE' }}>
          <tr>
            <th scope="col" className="px-6 py-3">Nama</th>
            <th scope="col" className="px-6 py-3">No Telepon</th>
            <th scope="col" className="px-6 py-3">TTL</th>
            <th scope="col" className="px-6 py-3">Alamat</th>
            <th scope="col" className="px-6 py-3">No Rekening</th>
            <th scope="col" className="px-6 py-3">KK</th>
            <th scope="col" className="px-6 py-3">KTP</th>
            <th scope="col" className="px-10 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {Array(10).fill().map((_, index) => (
            <tr key={index} className="bg-white border-b border-grey hover:bg-blue-100">
              <td className="py-2 px-4 border-b">Nama Kurir {index + 1}</td>
              <td className="py-2 px-4 border-b">085765656{index}</td>
              <td className="py-2 px-4 border-b">Bandung, 12/08/198{index}</td>
              <td className="py-2 px-4 border-b">Alamat Kurir {index + 1}</td>
              <td className="py-2 px-4 border-b">1234-5678-90{index}</td>
              <td className="py-2 px-4 border-b text-center">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">View</button>
              </td>
              <td className="py-2 px-4 border-b text-center">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">View</button>
              </td>
              <td className="py-2 px-4 border-b text-center flex items-center justify-center">
                <button
                  className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-700"
                  title="Ceklis (Approval)"
                >
                  <HiCheck size={20} />
                </button>
                <button
                  className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 ml-2"
                  title="Silang (Reject)"
                >
                  <HiX size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
