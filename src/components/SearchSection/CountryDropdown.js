import React, { useState } from "react";
import styles from "./CountryDropdown.module.css";
const countries = ["United States of America","United Arab Emirates","India"];

const CountryDropdown = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    onSelect(country);
  };
  const handleButtonClick = () => {
    setIsOpen(false);
    onSelect(selectedCountry);
  };
  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className={styles.dropdown}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        {selectedCountry ? selectedCountry : "Select Country"}
      </div>
      {isOpen && (
        <div className={styles.content}>
          <input
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Search country..."
            className={styles.searchInput}
          />
          <ul className={styles.countryList}>
            {filteredCountries.map((country, index) => (
              <li
                key={index}
                onClick={() => handleSelectCountry(country)}
                className={styles.countryItem}
              >
                <input
                  type="radio"
                  checked={selectedCountry === country}
                  onChange={() => handleSelectCountry(country)}
                  className={styles.radio}
                />
                <span>{country}</span>
              </li>
            ))}
          </ul>
          <button onClick={handleButtonClick} className={styles.button}>
            Add
          </button>
        </div>
      )}
    </div>
  );
};
export default CountryDropdown;