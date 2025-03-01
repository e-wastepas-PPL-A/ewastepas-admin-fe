"use client";

import React, { useState, useEffect } from "react";
import { HiPencil, HiTrash, HiUser } from "react-icons/hi";
import { Table } from "flowbite-react";
import axios from "axios";
import PopUpDelete from "./PopUpDelete"
import PopUpAdd from "./PopUpAdd";
import PopUpEdit from "./PopUpEdit";
import CustomSearchbar from "../../components/ComponentsDashboard/Searchbar";

export default function CustomTable() {
  const [modalType, setModalType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWasteId, setSelectedWasteId] = useState(null);
  const [wastes, setWastes] = useState([]);
  const [categories, setCategories] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 10;

  const fetchListWaste = async (page = 1) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://admin-api.ewhale.my.id/api/waste/?page=${page}`);
      const wasteData = response.data.data.waste.data;
      const totalItems = response.data.data.waste.total;

      // Fetch categories for each waste type
      const categoryPromises = wasteData.map(async (waste) => {
        if (waste.waste_type_id) {
          const categoryResponse = await axios.get(
            `https://admin-api.ewhale.my.id/api/waste_type/${waste.waste_type_id}`
          );
          return { id: waste.waste_type_id, name: categoryResponse.data.data.waste_type_name };
        }
        return { id: waste.waste_type_id, name: "Unknown" };
      });

      const categoryData = await Promise.all(categoryPromises);
      const categoryMap = categoryData.reduce((acc, category) => {
        acc[category.id] = category.name;
        return acc;
      }, {});

      setCategories(categoryMap);
      setWastes(wasteData);
      setTotalPages(Math.ceil(totalItems / itemsPerPage));
    } catch (error) {
      console.error("Error fetching waste data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchListWaste(currentPage);
  }, [currentPage]);

  const handleDelete = (wasteId) => {
    setModalType("delete");
    setIsModalOpen(true);
    setSelectedWasteId(wasteId);
  };

  const handleEdit = (wasteId) => {
    setModalType("edit");
    setIsModalOpen(true);
    setSelectedWasteId(wasteId);
  };

  const fetchUpdatedData = () => {
    fetchListWaste(currentPage);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <button 
          className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700"
          onClick={() => setIsAddModalOpen(true)}
        >
          Tambah Data
        </button>
      </div>
      {/* <div className="mt-4 ml-4">
        <CustomSearchbar style={{ marginRight: "sm-7" }} />
      </div> */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-auto max-h-[500px]">
        <Table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
          <thead className="text-xs text-white uppercase" style={{ backgroundColor: '#42A444', borderBottom: '2px solid #42A444' }}>
            <tr>
              {/* <th scope="col" className="px-4 py-2">
                <input type="checkbox" />
              </th> */}
              <th scope="col" className="px-6 py-3 text-center">Gambar</th>
              <th scope="col" className="px-6 py-3">Nama Sampah</th>
              <th scope="col" className="px-6 py-3">Kategori Sampah</th>
              <th scope="col" className="px-6 py-3">Deskripsi</th>
              <th scope="col" className="px-6 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="4" className="text-center py-4">Loading...</td>
              </tr>
            ) : (
              wastes.map((waste, index) => (
                <tr key={index} className="bg-white border-b hover:bg-green-100">
                  {/* <td className="py-2 px-4 text-center">
                    <input type="checkbox" />
                  </td> */}
                  <td className="py-2 px-4 border-b text-center">
                    {waste.image ? (
                      <img
                        src={waste.image}
                        alt="Foto"
                        className="w-10 h-10 rounded-full inline-block"
                      />
                    ) : (
                      <HiUser className="inline-block text-gray-600" size={40} />
                    )}
                  </td>
                  <td className="py-2 px-4">{waste.waste_name}</td>
                  <td className="py-2 px-4">{categories[waste.waste_type_id] || "Loading..."}</td>
                  <td className="py-2 px-4">{waste.description}</td>
                  <td className="py-2 px-4 text-center flex items-center justify-center space-x-2">
                    <button
                      className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-700"
                      title="Edit"
                      onClick={() =>
                        handleEdit(waste.waste_id)
                      }
                    >
                      <HiPencil size={20} />
                    </button>
                    <button
                      onClick={() =>
                        handleDelete(waste.waste_id)
                      }
                      className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700"
                      title="Delete"
                    >
                      <HiTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
        {/* Tombol Pagination */}
        <div className="flex justify-center mt-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
            >
            Previous
          </button>
          <span className="px-4 py-2 mx-1">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
            >
            Next
          </button>
        </div>
      </div>

      {isModalOpen && modalType === "edit" &&(
        <PopUpEdit
          onClose={() => setIsModalOpen(false)}
          wasteId={selectedWasteId}
          onSuccess={fetchUpdatedData}
        />
      )}

      {/* PopUpDelete */}
      {isModalOpen && modalType === "delete" && (
        <PopUpDelete
          onClose={() => setIsModalOpen(false)}
          wasteId={selectedWasteId}
          onSuccess={fetchUpdatedData}
        />
      )}

      {/* PopUpAddSampahElektronik */}
      {isAddModalOpen && (
        <PopUpAdd
          onClose={() => setIsAddModalOpen(false)}
          onSuccess={fetchUpdatedData}
        />
        )}
    </div>

  );
}