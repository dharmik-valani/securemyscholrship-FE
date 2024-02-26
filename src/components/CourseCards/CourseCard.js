import React from 'react';
import styles from './CourseCard.module.css';
import Image from 'next/image';

const CourseCard = ({ course }) => {

  console.log('%cCourseCard.js line:7 course', 'color: #007acc;', course);
    const handleApply = () => {
        // Implement application logic or redirection
        console.log('Applying for scholarship...');
      };

  return (
    <div className={styles.card}>
      <div className={styles.logoWrapper}>
          <img
            src="https://picsum.photos/100/100" // Replace with the path to your logo image
            alt="Heriot-Watt University Logo"
            className={styles.logo}
          />
        </div>
      <div className={styles.imageWrapper}>
         <img
          src="https://picsum.photos/400/100"
          alt="Random Background"
          className={styles.backgroundImage}
        />
      </div>
      <svg width="100%" viewBox="4 0 355 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}><path d="M0 30C0 30 38 12.5 179 15C320 17.5 359 0 359 0V24.5C286 28 249.099 23.8194 179 20.5C108.901 18.7426 70 11 0 14V30Z" fill="#E6EAEF"></path></svg>
      <div className={styles.courseInfo}>
        <h1 className={styles.courseTitle}>{course.course_name}</h1>
        <p className={styles.university_name}>{course.university_name}, {course.country_name}</p>
        <div className={styles.tuitionInfo}>
          <div className={styles.infocard}>
             <div className={styles.course_tuition}> {course.currency} {course.course_tuition} </div>
             <div className={styles.cardtext}> Est. Annual Tuition </div>
          </div>
          <div className={styles.infocard}>
             <div className={styles.courseDuration}> {course.course_duration} </div>
             <div className={styles.cardtext}> Course Duration</div>
            </div>
        </div>
        <div className={styles.scholarshipInfo}>
          <div className={styles.undergraduteScholershipTitle}>{course?.level_name?.toUpperCase()} SCHOLARSHIP</div>
          <div className={styles.scholarship_name}><div className={styles.additionalScholarShip}></div>{course.scholarship_name}</div>
          <div className={styles.scholarship_promo}><div></div>{course.scholarship_promo}</div>
        </div>
        <button className={styles.applyButton} onClick={handleApply}>
          Secure Scholarship
        </button>
        <p className={styles.securetext}>Secure your spot today and our experts will connect with you within <span className={styles.hourHighlight}>48 hours</span></p>
      </div>
    </div>
  );
};

export default CourseCard;
