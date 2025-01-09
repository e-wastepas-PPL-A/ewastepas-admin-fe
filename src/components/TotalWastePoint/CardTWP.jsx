import { useEffect, useState } from "react";
import { Card } from "flowbite-react"; // Ensure you have the Card component imported
import axios from "axios";

export function CardTWP() {
  const [dropboxes, setDropboxes] = useState([]);

  useEffect(() => {
    axios.get("http://34.16.66.175:8031/api/total-poin")
      .then(response => {
        if (response.data.success) {
          setDropboxes(response.data.data.dropboxs);
        }
      })
      .catch(error => {
        console.error("Error fetching dropbox data:", error);
      });
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className={`flex gap-4 ${dropboxes.length > 4 ? "flex-wrap" : ""}`}>
        {dropboxes.slice(0, 4).map(dropbox => ( // Only take the first 4 dropboxes
          <Card 
            key={dropbox.dropbox_id} 
            href="#" 
            className="w-60 h-32 flex flex-col justify-center items-center max-w-sm"
          >
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {dropbox.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {dropbox.capacity} Electronics Waste
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
