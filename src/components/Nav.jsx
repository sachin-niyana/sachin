import React from 'react';
import jadoo from '../assets/png/jadoo.png';
import play from '../assets/png/Play-button.png';
import women from '../assets/png/women-img.png';
import side from '../assets/png/side-img.png';
import decore from '../assets/png/Decore.png';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className=' overflow-hidden'>
            <div className='position-relative'>
                <img className='side' src={side} alt="side" />
                <Container data-aos="fade-up"
                    data-aos-duration="3000">
                    <nav>
                        <div className='d-flex justify-content-center justify-content-between align-items-center pt-4'>
                            <img src={jadoo} alt="jadoo" />
                            <label for='iconbox' className='z-index'>
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                            <input type="checkbox" id='iconbox' hidden className='d-none' />
                            <div className='d-flex align-items-center lg-screen  gap-lg-5 gap-4 '>
                                <h3><Link className='fw-400 fs-17 fc-dark mb-0'>Desitnations</Link></h3>
                                <h3><Link className='fw-400 fs-17 fc-dark mb-0'>Hotels</Link></h3>
                                <h3><Link className='fw-400 fs-17 fc-dark mb-0'>Flights</Link></h3>
                                <h3><Link className='fw-400 fs-17 fc-dark mb-0'>Bookings</Link></h3>
                                <h3><Link className='fw-500 fs-17 fc-dark mb-0'>Login</Link></h3>
                                <Link><button className='fw-500 fs-17 fc-dark mb-0 btn-1'>Sign up</button></Link>
                                <select className='fw-500 fs-17 fc-dark' name='language' id='language'>
                                    <option className='fw-500 fs-17 fc-dark'>En</option>
                                    <option className='fw-500 fs-17 fc-dark'>Hi</option>
                                </select>
                            </div>
                        </div>
                    </nav>
                    <Row>
                        <Col md={6} className='mt-5 position-relative'>
                            <h5 className='fw-700 fs-20 fc-orange pt-5 ff-poppins'>Best Destinations around the world</h5>
                            <img className='decore' src={decore} alt="decore" />
                            <h1 className='fw-700 fs-84 fc-primary max-w-545 ff-volkhov'>Travel, enjoy
                                and live a new
                                and full life</h1>
                            <p className='fw-500 ff-poppins'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                            <div className='d-sm-flex align-items-center gap-4'>
                                <div className='d-flex justify-content-sm-start justify-content-center'>
                                    <a href="#"><button className='fw-500 fs-18 fc-white btn-2'>Find out more</button></a>
                                </div>
                                <div className='d-flex align-items-center gap-3 mt-sm-0 justify-content-sm-start justify-content-center mt-4'>
                                    <a href="#"><img src={play} alt="play-button" /></a>
                                    <h5 className='fw-500 fs-17 fc-light ff-poppins'>Play Demo</h5>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className='mt-md-2 mt-5 d-flex justify-content-center'>
                            <img className='women w-100' src={women} alt="women" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Nav