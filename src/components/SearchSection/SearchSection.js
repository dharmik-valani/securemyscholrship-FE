import useDebounce from '@/hooks/useDebounce';
import React, { useEffect, useState } from 'react';
import CountryDropdown from './CountryDropdown';
import LevelDropdown from './LevelDropDown';
import NameWiseSearch from './NameWiseSearch';
import styles from './SearchSection.module.css';


const SearchSection = ({handleSelect, handleSearch, handleCountrySelect}) => {
  return (
    <div className={styles['search-section']}>
      <NameWiseSearch onSearch={handleSearch}/>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 0.5rem'}}>
      <LevelDropdown
       options={["Undergraduate", "Postgraduate", "Foundation", "Diploma"]}
       onSelect={handleSelect}/>
      <CountryDropdown onSelect={handleCountrySelect} />
      </div>
    </div>
  );
};

export default SearchSection;
