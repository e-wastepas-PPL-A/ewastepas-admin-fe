
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { HiBell } from "react-icons/hi";

export default function CustomNavbar() {
  return (
    <Navbar className="bg-gray-100 shadow">
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
          
        >
          <Dropdown.Header>
            <span className="block text-sm">Rusdi Sigma</span>
            <span className="block truncate text-sm font-medium">skibidi@ngawi.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <h3 className="text-black mt-2 ml-5">Rusdi Sigma</h3>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="ml-auto mr-6">
        <Navbar.Link href="#">
          <HiBell className="mr-2 h-5 w-5" />
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
