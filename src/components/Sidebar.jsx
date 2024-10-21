
"use client";

import { Sidebar } from "flowbite-react";
import { HiArchive, HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export default function CustomSidebar() {
  return (
    <Sidebar aria-label="Sidebar with logo">
      {/* <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="">
        E-Whale
      </Sidebar.Logo> */}
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Penjemputan Sampah
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArchive}>
            History
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
