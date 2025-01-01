import { HiBell } from "react-icons/hi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false); // State for notification dropdown
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include', // Sertakan cookie dalam permintaan
      });
  
      if (response.ok) {
        // Hapus cookie sesi
        Cookies.remove("session_id");
  
        // Redirect ke halaman login
        window.location.href = "http://localhost:5173/login"; // Ganti dengan URL login Anda
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };

  const greetings = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 0 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <>
      <nav className="text-revamp-neutral-10 p-4 border-b border-revamp-neutral-10/20">
        <div className="mx-auto flex justify-between items-center">   
          <div className="text-xl font-bold">
            {greetings()},{"Rusdi Sigma"}
          </div>
          <div className="flex items-center gap-3">
            {/* Notification Dropdown */}
            <div className="relative">
              <button
                className="inline-flex items-center p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                onClick={() => setNotificationOpen(!notificationOpen)}>
                <span className="sr-only">Notifications</span>
                <HiBell className="mr-2 h-5 w-5" />
              </button>

              <div
                className={`${
                  !notificationOpen && "hidden"
                } transition-all duration-200 absolute end-0 z-10 mt-2 w-56 rounded-md border-1 border-revamp-neutral-8 bg-white shadow-lg`}
                role="menu">
                <div className="p-2">
                  <div className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    Order No. 1 is waiting for collection
                    <p className="text-gray-500 text-sm mt-1 text-left">15 Minutes ago</p>
                  </div>
                  <div className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    Order No. 2 is on its way
                    <p className="text-gray-500 text-sm mt-1 text-left">15 Minutes ago</p>
                  </div>
                  <div className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    Order No. 3 trash has been picked up
                    <p className="text-gray-500 text-sm mt-1 text-left">15 Minutes ago</p>
                  </div>
                  <div className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    Order No. 4 trash has been picked up
                    <p className="text-gray-500 text-sm mt-1 text-left">15 Minutes ago</p>
                  </div>
                  <div className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    Order No. 1 has been completed
                    <p className="text-gray-500 text-sm mt-1 text-left">15 menit yang lalu</p>
                  </div>
                  <div className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    See All
                  </div>
                </div>
              </div>
            </div>

            {/* User button dropdown */}
            <div className="relative">
              <div
                className="inline-flex items-center overflow-hidden rounded-md bg-white cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}>
                <div className="p-4 flex items-center gap-3">
                  <img
                    src={`https://eu.ui-avatars.com/api/?name=John+Doe&size=250`}
                    alt="Profile"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Rusdi Sigma</p>
                  </div>
                </div>

                <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
                  <span className="sr-only">Menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div
                className={`${
                  !isOpen && "hidden"
                } transition-all duration-200 absolute end-0 z-10 mt-2 w-56 rounded-md border-1 border-revamp-neutral-8 bg-white shadow-lg`}
                role="menu">
                <div className="p-2 inline-flex items-center text-revamp-error-500">
                  <HiBell size={15} />
                  <a
                    href="#"
                    onClick={handleLogout}
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CustomNavbar;
