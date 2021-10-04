import React from 'react';
import './Course.css'
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Course = (props) => {
    const { id, course, price, image, tutor, tutorial } = props.course
    const history = useHistory()
    const handleDetails = (id) => {
        history.push(`/cart/${id}`)
    }
    return (
        <div>
            <Col>
                <Card className="custom-card border-0">
                    <Card.Img src={image} className="img" />
                    <Card.Body>
                        <Card.Title className="card-title"> {course} </Card.Title>
                        <Card.Text>
                            <h6>Author: {tutor}</h6>
                            <p>Lessions: {tutorial}</p>
                            <h4>Price: {price} $</h4>
                            <button onClick={() => handleDetails(id)} className="btn btn-success col-12">Details</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Course;