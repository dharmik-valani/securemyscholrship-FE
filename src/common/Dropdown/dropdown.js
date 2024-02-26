// components/Dropdown.js
import React, { useState } from "react";
import styles from "./styles.module.css";

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Define isOpen state

  const handleSelect = (option) => {
    setSelectedOption(option);
    // onSelect(option); // Remove this line if onSelect is not needed here
  };

  const handleConfirm = () => {
    // You can perform any action needed when the confirm button is clicked
    console.log("Confirmed selection:", selectedOption);
    setIsOpen(false); // Close the dropdown after confirmation
  };

  return (
    <div className={styles.dropdown}>
      <div>
        <div
          className={styles.selectedOption}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption || "Select an option"}
        </div>
        {isOpen && (
          <div className={styles.options}>
            {options.map((option) => (
              <div
                key={option}
                className={styles.option}
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
            <button className={styles.confirmButton} onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
