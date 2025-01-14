"use client";

import { Label, TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import { useState } from 'react';

export default function CustomSearchbar({ searchTerm, onSearch, entries, onEntriesChange }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="max-w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          {/* <span className="mr-2">Show</span>
          <select
            value={entries}
            onChange={(e) => onEntriesChange(Number(e.target.value))} // Update the entries per page
            className="border rounded px-2 py-1"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <span className="ml-2">entries</span> */}
        </div>
        <div className="max-w-md">
          <Label htmlFor="search" value="Cari" />
          <TextInput
            id="search"
            type="text"
            icon={HiSearch}
            placeholder="Cari..."
            value={searchTerm}
            onChange={handleSearch}
            required
          />
        </div>
      </div>
    </div>
  );
}
