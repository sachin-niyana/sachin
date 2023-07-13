import React from 'react';
import temple_1 from '../assets/png/temple-1.png';
import temple_2 from '../assets/png/temple-2.png';
import temple_3 from '../assets/png/temple-3.png';
import tar from '../assets/png/tar.png';
import arrow from '../assets/png/arrow.png';
import { Col, Container, Row } from 'react-bootstrap';

const Section_two = () => {
    return (
        <div className='overflow-hidden'>
            <Container className='pt-5 mt-5 pb-5 mb-5'>
                <div className='d-flex justify-content-center'>
                    <h4 className='fw-600 fs-18 fc-secondary ff-poppins'>Top Selling</h4>
                </div>
                <div className='d-flex justify-content-center'>
                    <h3 className='fw-700 fs-50 fc-extra-dark ff-volkhov'>Top Destinations</h3>
                </div>
                <Row>
                    <Col lg={4} md={6} data-aos="fade-right" data-aos-duration="3000">
                        <div className='d-flex justify-content-center'>
                            <div className='card-2 mt-5 mb-3 cursor'>
                                <img className='w-100' src={temple_1} alt="temple-1" />
                                <div className='d-flex justify-content-between px-3 mt-4'>
                                    <h4 className='fw-500 fs-18 fc-secondary ff-poppins'>Rome, Italty</h4>
                                    <h4 className='fw-500 fs-18 fc-secondary ff-poppins'>$5,42k</h4>
                                </div>
                                <div className='d-flex  px-3 gap-3 mt-3'>
                                    <img className='arrow-img' src={arrow} alt="arrow" />
                                    <h4 className='fw-500 fs-17 fc-secondary pb-4' ff-poppins>10 Days Trip</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} data-aos="fade-right" data-aos-duration="3000">
                        <div className='d-flex justify-content-center'>
                            <div className='card-2 mt-5 mb-3 cursor'>
                                <img className='w-100' src={temple_2} alt="temple-2" />
                                <div className='d-flex justify-content-between px-3 mt-4'>
                                    <h4 className='fw-500 fs-18 fc-secondary ff-poppins'>London, UK</h4>
                                    <h4 className='fw-500 fs-18 fc-secondary ff-poppins'>$4.2k</h4>
                                </div>
                                <div className='d-flex  px-3 gap-3 mt-3'>
                                    <img className='arrow-img' src={arrow} alt="arrow" />
                                    <h4 className='fw-500 fs-17 fc-secondary pb-4 ff-poppins'>12 Days Trip</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} data-aos="fade-right" data-aos-duration="3000">
                        <div className='d-flex justify-content-center'>
                            <div className='card-2 mt-5 mb-3 position-relative cursor'>
                                <img className='timg' src={tar} alt="atr" />
                                <img className='w-100' src={temple_3} alt="temple-3" />
                                <div className='d-flex justify-content-between px-3 mt-4'>
                                    <h4 className='fw-500 fs-18 fc-secondary ff-poppins'>Full Europe</h4>
                                    <h4 className='fw-500 fs-18 fc-secondary ff-poppins'>$15k</h4>
                                </div>
                                <div className='d-flex  px-3 gap-3 mt-3'>
                                    <img className='arrow-img' src={arrow} alt="arrow" />
                                    <h4 className='fw-500 fs-17 fc-secondary pb-4 ff-poppins'>28 Days Trip</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section_two