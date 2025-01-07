"use client";

import {
  ClipboardList,
  CircuitBoard,
  MapPin,
  Clock,
  LayoutDashboard,
  Menu,
  X,
  CircleDollarSign,
  ChartBarStacked,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { SiDropbox } from "react-icons/si";
import { FaBoxOpen } from "react-icons/fa";
import { HiTruck, HiChip, HiCloud, HiArchive, HiCurrencyDollar, HiGift , HiUser, HiUserGroup, HiTrash, HiChevronDown, HiOutlineTrash, HiLogout, HiViewList } from "react-icons/hi";
import Logo from "../../assets/ewhale.svg";

const customTheme = {
  root: {
    inner: 'h-full overflow-y-auto overflow-x-hidden bg-white-1000'
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
    <Sidebar aria-label="Sidebar with logo" className="flex-1 overflow-y-auto" theme={customTheme} style={{ backgroundColor: '#005B96' }}>
    <div className="bg-white w-full h-[94px] flex items-center justify-center">
      <img src={Logo} alt="E-WHALE Logo" className="max-h-[50px]" />
    </div>
      <Sidebar.Items className="px-3 py-4">
        <Sidebar.ItemGroup>
          {/* Title REGISTRASI */}
          <h2 className="text-lg font-semibold my-2 text-white">REGISTRASI</h2>
          <Sidebar.Item
            href="#"
            icon={() => <Users className="text-white group-hover:text-black" />}
            onClick={() => toggleItem('approval')}
            className="group flex items-center justify-between"
          >
            <div className="flex items-center">
              <h1 className="text-white hover:text-black hover:no-underline">Approval Registrasi</h1>
              <HiChevronDown
                className={`ml-2 text-white group-hover:text-black transition-transform ${openItems.approval ? 'rotate-180' : ''}`}
              />
            </div>
          </Sidebar.Item>
          {openItems.approval && (
            <Sidebar.ItemGroup className="pl-4">
              <Sidebar.Item 
                className="group text-white hover:text-black hover:no-underline flex items-center" 
                href="/register-masyarakat" 
                icon={() => <Users className="text-white group-hover:text-black" />}
              >
                Registrasi Masyarakat
              </Sidebar.Item>
              <Sidebar.Item 
                className="group text-white hover:text-black hover:no-underline flex items-center" 
                href="/register-kurir" 
                icon={() => <Users className="text-white group-hover:text-black" />}
              >
                Registrasi Kurir
              </Sidebar.Item>
            </Sidebar.ItemGroup>          
          )}

          {/* Title DATAMASTER */}
            <h2 className="text-lg font-semibold my-2 text-white">DATAMASTER</h2>
            <Sidebar.Item
              href="#"
              icon={() => <CircuitBoard className="text-white group-hover:text-black" />}
              onClick={() => toggleItem('ewaste')}
              className="group flex items-center justify-between"
            >
              <div className="flex items-center">
                <span className="text-white hover:text-black hover:no-underline">E-waste</span>
                <HiChevronDown
                  className={`ml-2 text-white group-hover:text-black transition-transform ${openItems.ewaste ? 'rotate-180' : ''}`}
                />
              </div>
            </Sidebar.Item>
            {openItems.ewaste && (
              <Sidebar.ItemGroup className="pl-4">
                <Sidebar.Item 
                  className="group text-white hover:text-black hover:no-underline flex items-center" 
                  href="/jenis-kategori" 
                  icon={() => <ChartBarStacked className="text-white group-hover:text-black" />}
                >
                  Jenis & Kategori
                </Sidebar.Item>
                <Sidebar.Item 
                  className="group text-white hover:text-black hover:no-underline flex items-center" 
                  href="/konversi-poin" 
                  icon={() => <CircleDollarSign className="text-white group-hover:text-black" />}
                >
                  Konversi Poin
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            )}
          <Sidebar.Item
            href="/dropbox"
            icon={() => <MapPin className="text-white group-hover:text-black" />}
            className="group text-white hover:text-black hover:no-underline flex items-center mt-2"
          >
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
          <Sidebar.Item className="text-white" href="/riwayat-penjemputan" icon={HiViewList}>
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
