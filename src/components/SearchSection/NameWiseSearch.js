import React, { useState } from "react";
import styles from "./NameWiseSearch.module.css";

const NameWiseSearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    const query = e.target.value;
    onSearch(query);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Type University name or course name.."
        className={styles.searchInput}
      />
    </div>
  );
};
export default NameWiseSearchComponent;