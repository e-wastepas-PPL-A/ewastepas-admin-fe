"use client";

import { HiPencil, HiTrash } from "react-icons/hi";
import { Table } from "flowbite-react";

export default function CustomTable() {
  return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table className="w-full text-sm text-left text-gray-900">
          <thead className="text-xs text-white uppercase" style={{ backgroundColor: '#106EBE', borderBottom: '2px solid #106EBE' }}>
            <tr>
              <th scope="col" className="px-4 py-2">
                <input type="checkbox" />
              </th>
              <th scope="col" className="px-6 py-3">Jenis Sampah Elektronik</th>
              <th scope="col" className="px-6 py-3">Kategori Sampah Elektronik</th>
              <th scope="col" className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array(10).fill().map((_, index) => (
              <tr key={index} className="bg-white border-b hover:bg-blue-100">
                <td className="py-2 px-4 text-center">
                  <input type="checkbox" />
                </td>
                <td className="py-2 px-4">Jenis Sampah</td>
                <td className="py-2 px-4">Kategori</td>
                <td className="py-2 px-4 text-center flex items-center justify-center space-x-2">
                  <button
                    className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-700"
                    title="Approve"
                  >
                    <HiPencil size={20} />
                  </button>
                  <button
                    className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700"
                    title="Reject"
                  >
                    <HiTrash size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
  );
}
