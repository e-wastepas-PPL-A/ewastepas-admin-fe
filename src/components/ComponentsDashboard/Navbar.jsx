
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { HiBell } from "react-icons/hi";

export default function CustomNavbar() {
  return (
    <Navbar className="bg-gray-100 shadow">
      <div className="flex md:order-2">  
          {
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          } 
        <h3 className="text-black mt-2 ml-5">Rusdi Sigma</h3>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="ml-auto mr-6">
        <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <HiBell className="mr-2 h-5 w-5 text-black" />
          }
        >
          <Dropdown.Item>
            <div>
              Order No. 1 is waiting for collection
              <p className="text-gray-500 text-sm mt-1 text-left">15 Minutes ago</p>
            </div>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <div>
              Order No. 2 is on its way
              <p className="text-gray-500 text-sm mt-1 text-left">15 Minutes ago</p>
            </div>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <div>
              Order No. 3 trash has been picked up
              <p className="text-gray-500 text-sm mt-1 text-left">15 Minutes ago</p>
            </div>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <div>
              Order No. 4 trash has been picked up
              <p className="text-gray-500 text-sm mt-1 text-left">15 Minutes ago</p>
            </div>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <div>
              Order No. 1 has been completed
              <p className="text-gray-500 text-sm mt-1 text-left">15 menit yang lalu</p>
            </div>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <div>
              See All
              <p className="text-gray-500 text-sm mt-1 text-left"></p>
            </div>
          </Dropdown.Item>
        </Dropdown>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
