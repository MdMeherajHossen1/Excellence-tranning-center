import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { CoursesContext } from '../../App';
import Service from '../Service/Service';

const Services = () => {
    const courses = useContext(CoursesContext)
    return (
        <div className="container-fluid courses-bg pt-4">
            <h1 className="courses-heading ">All Courses of Excellence Training Centre</h1>

            <Row xs={1} md={3} className="g-3 p-4">
                {
                    courses?.map(course => <Service
                        key={course.id}
                        course={course}
                    ></Service>)
                }
            </Row>

        </div>
    );
};

export default Services;