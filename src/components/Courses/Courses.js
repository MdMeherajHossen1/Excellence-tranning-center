import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css'
import { useContext } from 'react';
import { CoursesContext } from "../../App";

const Courses = () => {
    const courses = useContext(CoursesContext)
    return (
        <div className="container-fluid courses-bg pt-4">
            <h1 className="courses-heading ">Management Courses of Excellence Training Centre</h1>

            <Row xs={1} md={2} className="g-3 p-4">
                {
                    courses?.slice(0, 4).map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </Row>

        </div>
    )
};
export default Courses;