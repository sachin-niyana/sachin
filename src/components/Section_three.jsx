import React from 'react';
import box_1 from '../assets/png/box-1.png';
import box_2 from '../assets/png/box-2.png';
import box_3 from '../assets/png/box-3.png';
import women_2 from '../assets/png/women-2.png';
import temple_4 from '../assets/png/temple-4.png';
import img_1 from '../assets/png/img-1.png';
import img_2 from '../assets/png/img-2.png';
import img_3 from '../assets/png/img-3.png';
import home from '../assets/png/home.png';
import line from '../assets/png/line.png';
import shadow from '../assets/png/shadow.png';
import { Col, Container, Row } from 'react-bootstrap';

const Section_three = () => {
    return (
        <Container className='mt-5 pt-5 pb-5 overflow-hidden'>
            <Row className='mb-5'>
                <Col md={6} data-aos="fade-right" data-aos-duration="3000">
                    <h4 className='fw-600 fs-18 fc-secondary ff-poppins'>Easy and Fast</h4>
                    <h2 className='fw-700 fs-50 extra-dark max-w-500 pb-3 ff-volkhov'>Book your next trip
                        in 3 easy steps</h2>
                    <div className='d-flex gap-4 mt-5'>
                        <img className='box' src={box_1} alt="box" />
                        <div>
                            <h4 className='fw-700 fs-16 fc-secondary ff-poppins'>Choose Destination</h4>
                            <p className='fw-400 fs-16 fc-secondary max-w-320 ff-poppins'>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    <div className='d-flex gap-4'>
                        <img className='box' src={box_2} alt="box" />
                        <div>
                            <h4 className='fw-700 fs-16 fc-secondary ff-poppins'>Make Payment</h4>
                            <p className='fw-400 fs-16 fc-secondary max-w-320 ff-poppins'>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    <div className='d-flex gap-4'>
                        <img className='box' src={box_3} alt="box" />
                        <div>
                            <h4 className='fw-700 fs-16 fc-secondary ff-poppins'>Reach Airport on Selected Date</h4>
                            <p className='fw-400 fs-16 fc-secondary max-w-320 ff-poppins'>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                </Col>
                <Col md={6} className=' mt-4 mb-5 d-flex col-12 justify-content-md-start justify-content-center position-relative' data-aos="flip-right" data-aos-duration="3000">
                    <img className='bg-shadow' src={shadow} alt="shadow" />
                    <div className='card-3 mt-5 position-relative cursor'>
                        <div className='card-4 '>
                            <div className='d-flex gap-3'>
                                <img className='temple' src={temple_4} alt="temple" />
                                <div>
                                    <h5 className='fw-500 fs-14 fc-secondary ff-poppins'>Ongoing</h5>
                                    <h3 className='fw-500 fs-18 fc-black ff-poppins'>Trip to rome</h3>
                                    <h4 className='fw-500 fs-14 fc-voilet  ff-poppins'>40% <span className='fw-500 fs-14 fc-black ff-poppins'>completed</span></h4>
                                    <img src={line} alt="line" />
                                </div>
                            </div>
                        </div>
                        <img className='w-100' src={women_2} alt="women-2" />
                        <h3 className='fw-500 fs-18 fc-black mt-4 pt-2 ff-poppins'>Trip To Greece</h3>
                        <div className='d-flex gap-4 mt-3'>
                            <h4 className='fw-500 fs-17 fc-secondary ff-poppins'>14-29 June |</h4>
                            <h4 className='fw-500 fs-17 fc-secondary ff-poppins'>by Robbin joseph</h4>
                        </div>
                        <div className='d-flex gap-4 mt-4'>
                            <img src={img_1} alt="img" />
                            <img src={img_2} alt="img" />
                            <img src={img_3} alt="img" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <div className='d-flex align-items-center gap-4'>
                                <img className='home' src={home} alt="home" />
                                <h3 className='fw-500 fs-17 fc-secondary mb-0 ff-poppins'>24 people going</h3>
                            </div>
                            <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.3644 2.45457C17.33 1.34265 15.8804 0.709981 14.3617 0.707636C12.8417 0.709395 11.3906 1.34173 10.3546 2.45386L10.0015 2.82698L9.64836 2.45386C7.59251 0.241198 4.13215 0.114128 1.91953 2.16998C1.82148 2.26112 1.72679 2.35577 1.63565 2.45386C-0.545218 4.80619 -0.545218 8.44162 1.63565 10.794L9.48255 19.069C9.75403 19.3556 10.2064 19.3679 10.493 19.0964C10.5024 19.0875 10.5115 19.0784 10.5204 19.069L18.3645 10.794C20.5452 8.44187 20.5452 4.80665 18.3644 2.45457ZM17.3302 9.80969H17.3294L10.0015 17.5386L2.67282 9.80969C1.00676 8.01229 1.00676 5.23481 2.67282 3.43741C4.1858 1.79757 6.74172 1.69475 8.38156 3.20773C8.46118 3.28119 8.53778 3.35779 8.61124 3.43741L9.48255 4.35663C9.76969 4.64193 10.2333 4.64193 10.5204 4.35663L11.3917 3.43812C12.9047 1.79828 15.4606 1.69546 17.1005 3.20844C17.1801 3.2819 17.2567 3.35851 17.3302 3.43812C19.0107 5.23837 19.023 8.02092 17.3302 9.80969Z" fill="#4152CA" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Section_three