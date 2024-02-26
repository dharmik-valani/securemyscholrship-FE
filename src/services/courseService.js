const fetchCourses = async () => {
    console.log('%ccourseService.js line:2 object', 'color: #007acc;');
    const response = await fetch('https://securemyscholrship-be.onrender.com/api/courses');
    const data = await response.json();
    return data.courses;
  };
  
  export default fetchCourses;
  