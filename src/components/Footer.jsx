import React from 'react';
import playstore from '../assets/png/play-store.png';
import applestore from '../assets/png/apple-store.png';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className='overflow-hidden'>
            <Row>
                <Col lg={3} md={4} className=' mt-40 ps-sm-3 ps-5'>
                    <h3 className='fw-500 fs-44 fc-primary ff-poppins'>Jadoo.</h3>
                    <p className='fs-13 fw-500 fc-secondary max-w-207 ff-poppins'>Book your trip in minute, get full
                        Control for much longer.
                    </p>
                </Col>

                <Col lg={6} md={8} className=' mt-40 d-sm-flex justify-content-between'>
                    <ul className='ps-sm-0'>
                        <li className='fw-700 fs-21 fc-black ff-poppins'>Company</li>
                        <a href="#"><li className='fw-500 fs-18 fc-secondary ff-poppins mt-4 cursor'>About</li></a>
                        <li className='fw-500 fs-18 fc-secondary ff-poppins mt-2 cursor'>Careers</li>
                        <li className='fw-500 fs-18 fc-secondary ff-poppins mt-2 cursor'>Mobile</li>
                    </ul>
                    <ul>
                        <li className='fw-700 fs-21 fc-black'>Contact</li>
                        <li className='fw-500 fs-18 fc-secondary ff-poppins mt-4 cursor'>Help/FAQ</li>
                        <li className='fw-500 fs-18 fc-secondary ff-poppins mt-2 cursor'>Press</li>
                        <li className='fw-500 fs-18 fc-secondary ff-poppins mt-2 cursor'>Affilates</li>
                    </ul>
                    <ul>
                        <li className='fw-700 fs-21 fc-black ff-poppins'>More</li>
                        <li className='fw-500 fs-18 fc-secondary ff-poppins mt-4 cursor'>Airlinefees</li>
                        <li className='fw-500 fs-18 fc-secondary ff-poppins mt-2 cursor'>Airline</li>
                        <li className='fw-500 fs-18 fc-secondary ff-poppins mt-2 cursor'>Low fare tips</li>
                    </ul>
                </Col>

                <Col lg={3}>
                    <div className='d-flex mt-40 justify-content-lg-end ps-0 me-5'>
                        <a href="#"><span>
                            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1722_653)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5 49C41.8218 49 51 39.8218 51 28.5C51 17.1782 41.8218 8 30.5 8C19.1782 8 10 17.1782 10 28.5C10 39.8218 19.1782 49 30.5 49Z" fill="white" />
                                </g>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.1084 26.2445C32.7883 26.1432 32.4202 26.0757 32.0842 26.0757C31.6681 26.0757 30.7719 26.3626 30.7719 26.9195V28.2527H32.9003V30.4971H30.7719V36.6905H28.6275V30.4971H27.5713V28.2527H28.6275V27.122C28.6275 25.4176 29.3636 24 31.14 24C31.7481 24 32.8363 24.0338 33.4284 24.2531L33.1084 26.2445Z" fill="#080809" />
                                <defs>
                                    <filter id="filter0_d_1722_653" x="0" y="0" width="61" height="61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="2" />
                                        <feGaussianBlur stdDeviation="5" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1722_653" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1722_653" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </span></a>
                        <a href="#"><span>
                            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1722_653)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5 49C41.8218 49 51 39.8218 51 28.5C51 17.1782 41.8218 8 30.5 8C19.1782 8 10 17.1782 10 28.5C10 39.8218 19.1782 49 30.5 49Z" fill="white" />

                                    <path d="M38.6562 22H27.3438C26.0516 22 25 23.0516 25 24.3438V35.6562C25 36.9487 26.0516 38 27.3438 38H38.6562C39.9487 38 41 36.9487 41 35.6562V24.3438C41 23.0516 39.9487 22 38.6562 22ZM40.0625 35.6562C40.0625 36.4316 39.4316 37.0625 38.6562 37.0625H27.3438C26.5684 37.0625 25.9375 36.4316 25.9375 35.6562V24.3438C25.9375 23.5684 26.5684 22.9375 27.3438 22.9375H38.6562C39.4316 22.9375 40.0625 23.5684 40.0625 24.3438V35.6562Z" fill="#080809" />

                                    <path d="M30 25.7812C30.6737 25.7812 28.7812 27.6737 28.7812 30C28.7812 32.3263 30.6737 34.2188 33 34.2188C35.3263 34.2188 37.2188 32.3263 37.2188 30C37.2188 27.6737 35.3263 25.7812 33 25.7812ZM33 33.2812C31.1906 33.2812 29.7188 31.8094 29.7188 30C29.7188 28.1906 31.1906 26.7188 33 26.7188C34.8094 26.7188 36.2812 28.1906 36.2812 30C36.2812 31.8094 34.8094 33.2812 33 33.2812Z" fill="#080809" />
                                </g>
                                <defs>

                                    <filter id="filter0_d_1722_653" x="0" y="0" width="61" height="61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="2" />
                                        <feGaussianBlur stdDeviation="5" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1722_653" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1722_653" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </span></a>
                        <a href="#"><span>
                            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1722_650)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5 49C41.8218 49 51 39.8218 51 28.5C51 17.1782 41.8218 8 30.5 8C19.1782 8 10 17.1782 10 28.5C10 39.8218 19.1782 49 30.5 49Z" fill="white" />
                                </g>
                                <path d="M38 23.539C37.405 23.8 36.771 23.973 36.11 24.057C36.79 23.651 37.309 23.013 37.553 22.244C36.919 22.622 36.219 22.889 35.473 23.038C34.871 22.397 34.013 22 33.077 22C31.261 22 29.799 23.474 29.799 25.281C29.799 25.541 29.821 25.791 29.875 26.029C27.148 25.896 24.735 24.589 23.114 22.598C22.831 23.089 22.665 23.651 22.665 24.256C22.665 25.392 23.25 26.399 24.122 26.982C23.595 26.972 23.078 26.819 22.64 26.578C22.64 26.588 22.64 26.601 22.64 26.614C22.64 28.208 23.777 29.532 25.268 29.837C25.001 29.91 24.71 29.945 24.408 29.945C24.198 29.945 23.986 29.933 23.787 29.889C24.212 31.188 25.418 32.143 26.852 32.174C25.736 33.047 24.319 33.573 22.785 33.573C22.516 33.573 22.258 33.561 22 33.528C23.453 34.465 25.175 35 27.032 35C33.068 35 36.368 30 36.368 25.666C36.368 25.521 36.363 25.381 36.356 25.242C37.007 24.78 37.554 24.203 38 23.539Z" fill="#080809" />
                                <defs>
                                    <filter id="filter0_d_1722_650" x="0" y="0" width="61" height="61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="2" />
                                        <feGaussianBlur stdDeviation="5" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1722_650" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1722_650" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </span></a>
                    </div>

                    <div className='d-flex justify-content-lg-end me-5'>
                        <h4 className='fw-500 fs-18 fc-secondary ff-poppins'>Discover our app</h4>
                    </div>
                    <div className='d-flex justify-content-lg-end'>
                        <div className='d-flex gap-3'>
                            <a href="#"><img src={playstore} alt="playstore" /></a>
                            <a href="#"><img src={applestore} alt="applestore" /></a>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='d-flex justify-content-center mt-5 mb-5'>
                <h5 className='fw-500 fs-14 ff-poppins fc-secondary'>All rights reserved@jadoo.co</h5>
            </div>
        </Container>
    )
}

export default Footer