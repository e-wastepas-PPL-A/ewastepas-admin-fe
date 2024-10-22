"use client";

import { Label, TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import { useState } from "react";

export default function CustomSearchbar() {
  const [entries, setEntries] = useState(10);

  return (
    <div className="max-w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="mr-2">Show</span>
          <select
            value={entries}
            onChange={(e) => setEntries(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <span className="ml-2">entries</span>
        </div>
        <div className="max-w-md">
          <Label htmlFor="search" value="" />
          <TextInput
            id="search"
            type="text"
            icon={HiSearch}
            placeholder="Search..."
            required
          />
        </div>
      </div>
    </div>
  );
}
