import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
const Service = (props) => {
    const { image, course, tutor, tutorial, price, id } = props.course;
    const history = useHistory()
    const handleDetails = (id) => {
        history.push(`/cart/${id}`)
    }
    return (
        <div>
            <Col>
                <Card className=" border-0">
                    <Card.Img src={image} className="img" />
                    <Card.Body className="text-start">
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

export default Service;