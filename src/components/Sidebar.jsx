"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { SiDropbox } from "react-icons/si";
import { FaBoxOpen } from "react-icons/fa";
import { HiTruck, HiChip, HiCloud, HiArchive, HiCurrencyDollar, HiGift , HiUser, HiUserGroup, HiTrash, HiChevronDown, HiOutlineTrash } from "react-icons/hi";
import Logo from "../assets/ewhale.svg"; 

const customTheme = {
  root: {
    inner: 'h-full overflow-y-auto overflow-x-hidden bg-white-1000 px-3 py-4'
  }
};

export default function CustomSidebar() {
  const [openItems, setOpenItems] = useState(() => {
    const storedState = localStorage.getItem('sidebarState');
    return storedState ? JSON.parse(storedState) : { approval: false, ewaste: false };
  });

  const toggleItem = (item) => {
    setOpenItems((prev) => {
      const newState = { ...prev, [item]: !prev[item] };
      localStorage.setItem('sidebarState', JSON.stringify(newState));
      return newState;
    });
  };

  useEffect(() => {
    return () => {
      localStorage.removeItem('sidebarState');
    };
  }, []);

  return (
    <Sidebar aria-label="Sidebar dengan logo" className="bg-white" theme={customTheme}>
      <Sidebar.Logo href="#">
        <img src={Logo} alt="E-WHALE Logo" className="w-32 h-24" />
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {/* Title REGISTRASI */}
          <h2 className="text-lg font-semibold my-2">REGISTRASI</h2>
          <Sidebar.Item
            href="#"
            icon={HiUser}
            onClick={() => toggleItem('approval')}
            className="flex items-center justify-between"
          >
            <div className="flex items-center">
              <span>Approval Registrasi</span>
              <HiChevronDown className={`ml-2 transition-transform ${openItems.approval ? 'rotate-180' : ''}`} />
            </div>
          </Sidebar.Item>
          {openItems.approval && (
            <Sidebar.ItemGroup className="pl-4">
              <Sidebar.Item href="/register-masyarakat" icon={HiUserGroup}>
                Registrasi Masyarakat
              </Sidebar.Item>
              <Sidebar.Item href="/register-kurir" icon={HiTruck}>
                Registrasi Kurir
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          )}

          {/* Title DATAMASTER */}
          <h2 className="text-lg font-semibold my-2">DATAMASTER</h2>
          <Sidebar.Item
            href="#"
            icon={HiOutlineTrash}
            onClick={() => toggleItem('ewaste')}
            className="flex items-center justify-between"
          >
            <div className="flex items-center">
              <span>E-waste</span>
              <HiChevronDown className={`ml-2 transition-transform ${openItems.ewaste ? 'rotate-180' : ''}`} />
            </div>
          </Sidebar.Item>
          {openItems.ewaste && (
            <Sidebar.ItemGroup className="pl-4">
              <Sidebar.Item href="/jenis-kategori" icon={HiChip}>
                Jenis & Kategori
              </Sidebar.Item>
              <Sidebar.Item href="/konversi-poin" icon={HiCurrencyDollar}>
                Konversi Poin
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          )}

          {/* Item Permintaan Sampah dan Penjemputan Sampah */}
          <Sidebar.Item href="/permintaan-sampah" icon={HiTrash} className="mt-2">
            Permintaan Sampah
          </Sidebar.Item>
          <Sidebar.Item href="/daftar-penjemputan" icon={HiTruck} className="mt-2">
            Daftar Penjemputan
          </Sidebar.Item>
          <Sidebar.Item href="/dropbox" icon={FaBoxOpen} className="mt-2">
            Dropbox
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
