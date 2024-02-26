"use client";
import React, { useState } from "react";
import Dropdown from "@/common/Dropdown/dropdown";
import SearchComponent from "@/common/Search/search";
import CountryDropdown from "@/common/Drodown & search/searchdropdown";

const dummyData = [
  "Apple",
  "Banana",
  "Orange",
  "Pineapple",
  "Grapes",
  "Watermelon",
  "Strawberry",
  "Blueberry",
  "Mango",
  "Peach",
];

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option) => {
    setSelectedValue(option);
  };

  const [searchResults, setSearchResults] = useState([]);
  const [allData] = useState(dummyData);

  const handleSearch = (query) => {
    const filteredResults = allData.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };


  return (
    <div>
      <h1>Search Page</h1>
      <Dropdown options={options} onSelect={handleSelect} />
      <SearchComponent onSearch={handleSearch} />
      {/* <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul> */}
      <CountryDropdown onSelect={handleCountrySelect} />
    </div>
  );
};

export default Filter;
