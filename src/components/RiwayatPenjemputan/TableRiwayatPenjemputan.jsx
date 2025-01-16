import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "flowbite-react";
import { HiEye } from "react-icons/hi";
import CustomPopUp from "../RiwayatPenjemputan/PopUpRiwayat";
import CustomSearchbar from "../RiwayatPenjemputan/SearchRiwayat";

export default function CustomTableRiwayat() {
    const [pickups, setPickups] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filteredPickups, setFilteredPickups] = useState([]);
    const [selectedPickupDetail, setSelectedPickupDetail] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://103.41.247.215:8031/api/riwayat-penjemputan");
                if (response.data.success) {
                    const pickupsData = response.data.data.pickups.data;
                    setPickups(pickupsData);
                    setFilteredPickups(pickupsData);
                }
            } catch (error) {
                console.error("Error fetching pickup data:", error);
            }
        };
        fetchData();
    }, []);

    const handleSearch = (searchTerm) => {
        // Filter based on pickup_id
        const filtered = pickups.filter(pickup =>
            pickup.pickup_id.toString().includes(searchTerm)
        );
        setFilteredPickups(filtered);
    };

    const handleDetailClick = async (pickupId) => {
        try {
            const response = await axios.get(`http://103.41.247.215:8031/api/riwayat-penjemputan/${pickupId}`);
            if (response.data.success) {
                console.log("Pickup Detail Data: ", response.data.data); // Debugging line
                setSelectedPickupDetail(response.data.data);
                setIsModalOpen(true);
            }
        } catch (error) {
            console.error("Error fetching pickup detail:", error);
        }
    };

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <CustomSearchbar onSearch={handleSearch} />
            <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                <thead className="text-xs text-white uppercase" style={{ backgroundColor: '#42A444', borderBottom: '2px solid #42A444' }}>
                    <tr>
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Nama Pelanggan</th>
                        <th scope="col" className="px-6 py-3">Nama Kurir</th>
                        <th scope="col" className="px-6 py-3">Total Sampah Di Ambil</th>
                        <th scope="col" className="px-6 py-3">Tanggal Pengambilan</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPickups.map(pickup => (
                        <tr className="bg-white border-b border-grey hover:bg-green-100" key={pickup.pickup_id}>
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                                {pickup.pickup_id}
                            </th>
                            <td className="px-6 py-4 text-black">{pickup.customer_name}</td>
                            <td className="px-6 py-4 text-black">{pickup.driver_name}</td>
                            <td className="px-6 py-4 text-black">{pickup.total_waste}</td>
                            <td className="px-6 py-4 text-black">{pickup.date}</td>
                            <td className="px-6 py-4 text-black">{pickup.status}</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-black hover:underline" onClick={() => handleDetailClick(pickup.pickup_id)}>
                                    <HiEye className="w-5 h-5" />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && selectedPickupDetail && (
                <CustomPopUp 
                    onClose={() => setIsModalOpen(false)} 
                    pickupData={selectedPickupDetail}
                />
            )}
        </div>
    );
}
