import React, { useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { CoursesContext } from "../../App";

const Cart = () => {
    const courses = useContext(CoursesContext)
    const { id } = useParams()
    const addedCourses = courses.filter(course => course.id === id)
    console.log(addedCourses)
    return (
        <div className="container-fluid courses-bg pt-4">
            <h1 className="courses-heading ">The Details of your Seleted Course</h1>

            <Row xs={1} md={1} className="g-3 p-4">
                {
                    addedCourses?.map(course => <Col>
                        <Card className="custom-card border-0">
                            <Card.Img src={course.image} className="img" />
                            <Card.Body>
                                <Card.Title className="card-title"> {course.course} </Card.Title>
                                <Card.Text>
                                    <h6>Author: {course.tutor}</h6>
                                    <p>Lessions: {course.tutorial}</p>
                                    <p>duration: {course.duration}</p>
                                    <h4>Price: {course.price} $</h4>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>

        </div>
    );
};

export default Cart;