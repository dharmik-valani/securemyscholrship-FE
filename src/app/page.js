import styles from "./page.module.css";
import Filter from "../pages/Filter";
import CourseList from "@/pages/CourseList";

export default function Home() {
  
  return (
    <div className="body-wrapper">
      <CourseList/>
    </div>
  );
}
