import React from 'react';
import img_1 from '../assets/png/card-img-1.png';
import img_2 from '../assets/png/card-img-2.png';
import img_3 from '../assets/png/card-img-3.png';
import img_4 from '../assets/png/card-img-4.png';
import hover from '../assets/png/hover-img.png';
import plus_1 from '../assets/png/plus-1.png';
import { Col, Container, Row } from 'react-bootstrap';

const Section_one = () => {
    return (
        <div className='position-relative'>
            <img className='plus-1' src={plus_1} alt="plus" />
            <Container className='mt-5 pt-5 overflow-hidden'>
                <div className='d-flex justify-content-center'>
                    <h4 className='fw-600 fs-18 fc-secondary ff-poppins'>CATEGORY</h4>
                </div>
                <div className='d-flex justify-content-center'>
                    <h3 className='fw-700 fs-50 fc-extra-dark ff-volkhov'>We Offer Best Services</h3>
                </div>
                <Row className='pb-5'>
                    <Col lg={3} md={4} sm={6} className='mt-5'>
                        <div className='d-flex justify-content-center'>
                            <div className='position-relative mt-40' data-aos="flip-left" data-aos-duration="3000">
                                <img className='hover-img' src={hover} alt="hover" />
                                <div className='card-1 cursor'>
                                    <div className='d-flex justify-content-center pt-4'>
                                        <img src={img_1} alt="card-img" />
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <h4 className='fw-600 fs-20 fc-success mt-4 pt-1 ff-open-sans'>Calculated Weather </h4>
                                    </div>
                                    <div className='d-flex justify-content-center text-center'>
                                        <p className='fw-500 fs-16 fc-secondary mt-3 max-w-180 ff-poppins'>Built Wicket longer admire do barton vanity itself do in it.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} className='mt-5'>
                        <div className='d-flex justify-content-center'>
                            <div className='position-relative mt-40' data-aos="flip-right" data-aos-duration="3000">
                                <img className='hover-img' src={hover} alt="hover" />
                                <div className='card-1 cursor'>
                                    <div className='d-flex justify-content-center pt-4'>
                                        <img src={img_2} alt="card-img" />
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <h4 className='fw-600 fs-20 fc-success mt-3 ff-open-sans'>Best Flights </h4>
                                    </div>
                                    <div className='d-flex justify-content-center text-center'>
                                        <p className='fw-500 fs-16 fc-secondary mt-3 max-w-180 ff-poppins'>Engrossed listening. Park gate sell they west hard for the.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} className='mt-5'>
                        <div className='d-flex justify-content-center'>
                            <div className='position-relative mt-40' data-aos="flip-left" data-aos-duration="3000">
                                <img className='hover-img' src={hover} alt="hover" />
                                <div className='card-1 cursor'>
                                    <div className='d-flex justify-content-center pt-4'>
                                        <img src={img_3} alt="card-img" />
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <h4 className='fw-600 fs-20 fc-success mt-4 pt-2 ff-open-sans'>Local Events</h4>
                                    </div>
                                    <div className='d-flex justify-content-center text-center'>
                                        <p className='fw-500 fs-16 fc-secondary mt-3 max-w-180 ff-poppins'>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} className='mt-5'>
                        <div className='d-flex justify-content-center'>
                            <div className='position-relative mt-40' data-aos="flip-right" data-aos-duration="3000">
                                <img className='hover-img' src={hover} alt="hover" />
                                <div className='card-1 cursor'>
                                    <div className='d-flex justify-content-center pt-4'>
                                        <img className='pt-2' src={img_4} alt="card-img" />
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <h4 className='fw-600 fs-20 fc-success mt-4 pt-2 ff-open-sans'>Customization</h4>
                                    </div>
                                    <div className='d-flex justify-content-center text-center'>
                                        <p className='fw-500 fs-16 fc-secondary mt-3 max-w-180 ff-poppins'>We deliver outsourced
                                            aviation services for
                                            military customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section_one