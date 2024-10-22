
"use client";

import { Sidebar } from "flowbite-react";
import { HiArchive, HiArrowSmRight, HiChartPie, HiInbox, HiReceiptRefund, HiShoppingBag, HiTable, HiTrash, HiTruck, HiUser, HiUserGroup, HiViewBoards } from "react-icons/hi";

const customTheme = {
  root: {
    inner: 'h-full overflow-y-auto overflow-x-hidden bg-white-1000 px-3 py-4'
  }
}

export default function CustomSidebar() {
  return (
    <Sidebar aria-label="Sidebar with logo" className="bg-white" theme={customTheme}>
      <Sidebar.Logo href="#" img="/dummy-logo.png" imgAlt="">
        E-WHALE
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiUser}>
            Approval Registrasi
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTruck}>
            Registrasi Kurir
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUserGroup}>
            Registrasi Masyarakat
          </Sidebar.Item>
          <Sidebar.Item href="/permintaan-sampah" icon={HiTrash}>
            Permintaan Sampah
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
