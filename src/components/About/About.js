import React from 'react';
import image from '../../about1.jpg'

const About = () => {
    return (
        <div className="courses-bg py-4">
            <div className="row  mx-auto">
                <div className="col-md-4 col-10 pb-3 mx-auto">
                    <img src={image} className="shadow-lg" alt="" />

                </div>
                <div className="col-md-7 col-10 mx-auto me-md-3  text-start shadow-lg p-3">
                    <h4 className="card-title">Lakshmipur's leading training centre for courses in Accounting, Business, Management, Marketing, Project Management and Soft Skills.</h4>
                    <p>Service options: Online classes , On-site services</p>
                    <p>Address: Excellence Training Centre, 44 mujibur Street Opposite to Ahli Studium Gate no : 1 , Villa no : 22 Lakshmipur</p>
                    <p><small> Open 10 AM ⋅ Closes 10Pm </small></p>
                    <p> Phone: +880 1754360225 </p>
                </div>
            </div>

        </div>
    );
};

export default About;