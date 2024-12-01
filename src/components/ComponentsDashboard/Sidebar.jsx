"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { SiDropbox } from "react-icons/si";
import { FaBoxOpen } from "react-icons/fa";
import { HiTruck, HiChip, HiCloud, HiArchive, HiCurrencyDollar, HiGift , HiUser, HiUserGroup, HiTrash, HiChevronDown, HiOutlineTrash, HiLogout, HiViewList } from "react-icons/hi";
import Logo from "../../assets/ewhale.svg";

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
    <Sidebar aria-label="Sidebar dengan logo" className="flex-1 overflow-y-auto" theme={customTheme} style={{ backgroundColor: '#005B96'}}>
      <div className="bg-white py-[27.5px]">
        <img src={Logo} alt="E-WHALE Logo" className="mx-auto" />
      </div>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {/* Title REGISTRASI */}
          <h2 className="text-lg font-semibold my-2 text-white">REGISTRASI</h2>
          <Sidebar.Item
            href="#"
            icon={HiUser}
            onClick={() => toggleItem('approval')}
            className="flex items-center justify-between"
          >
            <div className="flex items-center">
              <span className="text-white">Approval Registrasi</span>
              <HiChevronDown style={{ color: '#FFFFFF'}} className={`ml-2 transition-transform ${openItems.approval ? 'rotate-180' : ''}`} />
            </div>
          </Sidebar.Item>
          {openItems.approval && (
            <Sidebar.ItemGroup className="pl-4">
              <Sidebar.Item className="text-white" href="/register-masyarakat" icon={HiUserGroup}>
                Registrasi Masyarakat
              </Sidebar.Item>
              <Sidebar.Item className="text-white" href="/register-kurir" icon={HiTruck}>
                Registrasi Kurir
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          )}

          {/* Title DATAMASTER */}
          <h2 className="text-lg font-semibold my-2 text-white">DATAMASTER</h2>
          <Sidebar.Item
            href="#"
            icon={HiOutlineTrash}
            onClick={() => toggleItem('ewaste')}
            className="flex items-center justify-between"
          >
            <div className="flex items-center">
              <span className="text-white">E-waste</span>
              <HiChevronDown style={{ color: '#FFFFFF'}} className={`ml-2 transition-transform ${openItems.ewaste ? 'rotate-180' : ''}`} />
            </div>
          </Sidebar.Item>
          {openItems.ewaste && (
            <Sidebar.ItemGroup className="pl-4">
              <Sidebar.Item className="text-white" href="/jenis-kategori" icon={HiChip}>
                Jenis & Kategori
              </Sidebar.Item>
              <Sidebar.Item className="text-white" href="/konversi-poin" icon={HiCurrencyDollar}>
                Konversi Poin
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          )}
          <Sidebar.Item href="/dropbox" icon={FaBoxOpen} className="text-white mt-2">
            Dropbox
          </Sidebar.Item>

          {/* Dropdown for Permintaan Sampah and Daftar Penjemputan */}
      <h2 className="text-lg font-semibold my-2 text-white">REQUEST</h2>
      <Sidebar.Item
        href="#"
        icon={HiArchive}
        onClick={() => toggleItem('permintaan')}
        className="flex items-center justify-between"
      >
        <div className="flex items-center">
          <span className="text-white">E-Waste Data</span>
          <HiChevronDown style={{ color: '#FFFFFF'}} className={`ml-2 transition-transform ${openItems.permintaan ? 'rotate-180' : ''}`} />
        </div>
      </Sidebar.Item>
      {openItems.permintaan && (
        <Sidebar.ItemGroup className="pl-4">
          <Sidebar.Item className="text-white" href="/permintaan-sampah" icon={HiTrash}>
            Pick Up Request
          </Sidebar.Item>
          <Sidebar.Item className="text-white" href="/daftar-penjemputan" icon={HiTruck}>
            Pick Up Reception
          </Sidebar.Item>
          <Sidebar.Item className="text-white" href="/total-waste-point" icon={HiCurrencyDollar}>
            Total Waste & Point
          </Sidebar.Item>
          <Sidebar.Item className="text-white" href="/daftar-penjemputan" icon={HiViewList}>
            Pick Up History
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      )}

          {/* Log out Item */}
      {/* <Sidebar.Item href="/logout" icon={HiLogout} className="mt-2">
        Log out
      </Sidebar.Item> */}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
