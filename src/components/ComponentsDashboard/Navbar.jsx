import { HiBell } from "react-icons/hi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NotificationPopup from '../ComponentsDashboard/PopUpNotif';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [selectedPickupData, setSelectedPickupData] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://103.41.247.215:8031/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
      });
  
      if (response.ok) {
        Cookies.remove("session_id");
        window.location.href = "http://103.41.247.215:8030/login";
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

  const fetchNotifications = async () => {
    try {
      const response = await fetch("http://103.41.247.215:8031/api/notifikasi-penjemputan", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        // Limit to the 5 most recent notifications
        const recentNotifications = data.data.notifications.slice(0, 5);
        setNotifications(recentNotifications);
      }
    } catch (err) {
      console.error("Error fetching notifications:", err);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    
    return date.toLocaleDateString();
  };

  const handleNotificationClick = async (pickupId) => {
    try {
      const response = await fetch(`http://103.41.247.215:8031/api/notifikasi-penjemputan/${pickupId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        setSelectedPickupData(data.data);
        setNotificationOpen(true);
      }
    } catch (err) {
      console.error("Error fetching pickup data:", err);
    }
  };

  return (
    <>
      <nav className="text-revamp-neutral-10 p-4 border-b border-revamp-neutral-10/20">
        <div className="mx-auto flex justify-between items-center">   
          <div className="text-xl font-bold">
            {greetings()}, {"Rusdi Sigma"}
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
                  {notifications.length > 0 ? (
                    notifications.map(notification => (
                      <div 
                        key={notification.pickup_id} 
                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 cursor-pointer"
                        onClick={() => handleNotificationClick(notification.pickup_id)}
                      >
                        Order No. {notification.pickup_id} is {notification.status}
                        <p className="text-gray-500 text-sm mt-1 text-left">{formatDate(notification.created_at)}</p>
                      </div>
                    ))
                  ) : (
                    <div className="block rounded-lg px-4 py-2 text-sm text-gray-500">
                      No notifications available.
                    </div>
                  )}
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

      {notificationOpen && selectedPickupData && (
        <NotificationPopup 
          pickupData={selectedPickupData} // Pass the pickup data
          onClose={() => setNotificationOpen(false)} 
        />
      )}
    </>
  );
};

export default CustomNavbar;
