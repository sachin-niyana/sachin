import React from 'react';
import dots from '../assets/png/dots.png';
import men from '../assets/png/men.png';
import { Col, Container, Row } from 'react-bootstrap';

const Section_four = () => {
    return (
        <Container className='mt-md-5 pt-md-5 mb-5 pb-5 overflow-hidden'>
            <Row>
                <Col md={5} className='mt-5'>
                    <h4 className='fw-500 fs-18 fc-secondary ff-poppins'>Testimonials</h4>
                    <h2 className='fw-700 fs-50 fc-extra-dark ff-volkhov'>What people say
                        about Us.</h2>
                    <img className='mt-5' src={dots} alt="dots" />
                </Col>
                <Col md={7} className='mt-5 cursor' data-aos="fade-up-left" data-aos-duration="3000">
                    <div className='d-flex justify-content-center'>
                        <div className='card-5 position-relative mb-5 ms-4'>
                            <img className='men' src={men} alt="men" />
                            <p className='fw-500 fs-16 ff-poppins'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                            <h5 className='fw-600 fs-18 fc-secondary ff-poppins'>Mike taylor</h5>
                            <h6 className='fw-500 fs-14 fc-secondary ff-poppins'>Lahore, Pakistan</h6>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Section_four