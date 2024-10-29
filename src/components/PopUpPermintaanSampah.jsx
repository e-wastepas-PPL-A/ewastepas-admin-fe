"use client";

import { Button, Modal, Select } from "flowbite-react";
import { useState } from "react";

export default function CustomPopUp({ onClose }) {
  const [openModal, setOpenModal] = useState(true);
  const [modalPlacement, setModalPlacement] = useState('center');

  const handleClose = () => {
    setOpenModal(false);
    onClose(); // Panggil fungsi onClose dari props
  };

  return (
    <>
      <Modal
        show={openModal}
        position={modalPlacement}
        onClose={handleClose}
      >
        <Modal.Header>Detail Penjemputan Sampah</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Nama Customer: <span className="font-bold text-black">Rusdi Skibidi Ohio</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                No Telp: <span className="font-bold text-black">08123456789</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Tanggal Permintaan: <span className="font-bold text-black">12 September 2024</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Nama Sampah: <span className="font-bold text-black">Acer Aspire E-15</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Jenis Sampah: <span className="font-bold text-black">Laptop / PC</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Jumlah Sampah: <span className="font-bold text-black">1 pcs</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Berat Sampah: <span className="font-bold text-black">2 kg</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Point: <span className="font-bold text-black">5 Point</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Total Point: <span className="font-bold text-black">25 Point</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Nama Kurir: <span className="font-bold text-black">Rusdi Ambatron</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                No Telp Kurir: <span className="font-bold text-black">08123456789</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Alamat Jemput: <span className="font-bold text-black">Jl. Jomokerto No. 1</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Alamat Dropbox: <span className="font-bold text-black">TPA</span>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Status: <span className="font-bold text-black">Diproses</span>
            </p>


          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
