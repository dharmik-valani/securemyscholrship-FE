'use client'
import React, { useEffect, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import CourseCard from '../components/CourseCards/CourseCard';
import SearchSection from '../components/SearchSection/SearchSection';
import fetchCourses from '../services/courseService';
import styles from './CourseList.module.css';

const CourseList = () => {  
  const [selectedValue, setSelectedValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const debouncedCourseName = useDebounce(courseName, 500)
  const handleSelect = (option) => {
    setSelectedValue(option);
  };
  const handleSearch = (query) => {
    setCourseName(query)
  };
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        let url = "https://securemyscholrship-be.onrender.com/api/courses";
        // Add selected value as a query parameter if it exists
        if (selectedValue && selectedCountry === '' &&  debouncedCourseName === '') {
          url += `?level=${selectedValue}`;
        }
        if (selectedCountry && selectedValue === '' &&  debouncedCourseName === '') {
          url += `?country=${selectedCountry}`;
        }
        if (selectedValue && selectedCountry && debouncedCourseName === '') {
          url += `?level=${selectedValue}&country=${selectedCountry}`;
        }
        if (debouncedCourseName &&  selectedCountry === '' && selectedValue === '') {
          // Add debounced course name as a query parameter if it exists
          url += `?name=${debouncedCourseName}`;
        }
        if (debouncedCourseName &&  selectedCountry  && selectedValue ) {
          // Add debounced course name as a query parameter if it exists
          url += `?name=${debouncedCourseName}&country=${selectedCountry}&level=${selectedValue}`;
        }
        if (debouncedCourseName &&  selectedCountry  && selectedValue === '' ) {
          // Add debounced course name as a query parameter if it exists
          url += `?name=${debouncedCourseName}&country=${selectedCountry}`;
        }
        if (debouncedCourseName &&  selectedCountry === ''  && selectedValue ) {
          // Add debounced course name as a query parameter if it exists
          url += `?name=${debouncedCourseName}&level=${selectedValue}`;
        }
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          setCourses(data.courses);
        } else {
          console.error("Failed to fetch courses:", res.status);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, [selectedValue,selectedCountry,debouncedCourseName]);

  return (
    <div>
      <SearchSection 
        handleSelect={handleSelect} 
        handleSearch={handleSearch} 
        handleCountrySelect={handleCountrySelect}/>
      <div className={styles.courseList}>
        {courses?.map(course => (
          <CourseCard key={course?.course_id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;

