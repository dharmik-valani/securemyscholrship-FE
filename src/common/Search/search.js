// components/SearchComponent.js
import React, { useState } from 'react';
import styles from './style.module.css';

const SearchComponent = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        const query = e.target.value;
        onSearch(query);
      };
  
    return (
        <div className={styles.searchContainer}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search..."
          className={styles.searchInput}
        />
      </div>
    );
};

export default SearchComponent;
