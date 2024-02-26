// components/CountryDropdown.js
import React, { useState } from 'react';
import styles from './style.module.css';

const countries = [
  'Afghanistan', 'Albania', 'Algeria'
];

const CountryDropdown = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSelectCountry = (country) => {
    if (!selectedCountries.includes(country)) {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const handleButtonClick = () => {
    setIsOpen(false);
    onSelect(selectedCountries);
  };

  const handleCheckboxChange = (country) => {
    const index = selectedCountries.indexOf(country);
    if (index === -1) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      const updatedCountries = [...selectedCountries];
      updatedCountries.splice(index, 1);
      setSelectedCountries(updatedCountries);
    }
  };

  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.dropdown}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        Select Countries
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
              <li key={index} onClick={() => handleSelectCountry(country)} className={styles.countryItem}>
                <input
                  type="checkbox"
                  checked={selectedCountries.includes(country)}
                  onChange={() => handleCheckboxChange(country)}
                  className={styles.checkbox}
                />
                <span>{country}</span>
              </li>
            ))}
          </ul>
          <button onClick={handleButtonClick} className={styles.button}>Add</button>
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
