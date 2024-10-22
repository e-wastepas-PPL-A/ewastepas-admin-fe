"use client";

import { useState } from "react"; // Import useState
import { Sidebar } from "flowbite-react";
import { HiTruck, HiUser, HiUserGroup, HiTrash, HiChevronDown, HiOutlineTrash} from "react-icons/hi"; // Impor ikon yang diperlukan

const customTheme = {
  root: {
    inner: 'h-full overflow-y-auto overflow-x-hidden bg-white-1000 px-3 py-4'
  }
}

export default function CustomSidebar() {
  const [isOpenApproval, setIsOpenApproval] = useState(false); // Status untuk mengatur dropdown Approval Registrasi
  const [isOpenEwaste, setIsOpenEwaste] = useState(false); // Status untuk mengatur dropdown E-waste

  return (
    <Sidebar aria-label="Sidebar dengan logo" className="bg-white" theme={customTheme}>
      <Sidebar.Logo href="#" img="/dummy-logo.png" imgAlt="">
        E-WHALE
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {/* Title REGISTRASI */}
          <h2 className="text-lg font-semibold my-2">REGISTRASI</h2>
          <Sidebar.Item 
            href="#" 
            icon={HiUser} 
            onClick={() => setIsOpenApproval(!isOpenApproval)}
            className="flex items-center justify-between"
          >
            <div className="flex items-center">
              <span>Approval Registrasi</span>
              <HiChevronDown className={`ml-2 transition-transform ${isOpenApproval ? 'rotate-180' : ''}`} />
            </div>
          </Sidebar.Item>
          {isOpenApproval && (
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/register-masyarakat" icon={HiUserGroup}>
                Registrasi Masyarakat
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTruck}>
                Registrasi Kurir
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          )}

          {/* Title DATAMASTER */}
          <h2 className="text-lg font-semibold my-2">DATAMASTER</h2>
          <Sidebar.Item 
            href="#" 
            icon={HiOutlineTrash} 
            onClick={() => setIsOpenEwaste(!isOpenEwaste)}
            className="flex items-center justify-between"
          >
            <div className="flex items-center">
              <span>E-waste</span>
              <HiChevronDown className={`ml-2 transition-transform ${isOpenEwaste ? 'rotate-180' : ''}`} />
            </div>
          </Sidebar.Item>
          {isOpenEwaste && (
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/permintaan-sampah" icon={HiTrash}>
                Permintaan Sampah
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTruck}>
                Penjemputan Sampah
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          )}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
