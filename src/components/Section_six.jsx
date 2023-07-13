import React from 'react';
import email from '../assets/png/email.png';
import plus_2 from '../assets/png/plus-2.png';
import round_1 from '../assets/png/round-1.png';
import round_2 from '../assets/png/round-2.png';
import telygram from '../assets/png/telygram.png';
import { Container } from 'react-bootstrap';

const Section_six = () => {
    return (
        <div className='position-relative overflow-hidden'>
            <img className='plus-2' src={plus_2} alt="plus" />
            <Container className=' my-container my-5 py-5' data-aos="flip-up" data-aos-duration="3000">
                <div className='card-6 position-relative'>
                    <img className='round-1' src={round_1} alt="round-1" />
                    <img className='round-2' src={round_2} alt="round-2" />
                    <img className='telygram' src={telygram} alt="tetygram" />
                    <div className='d-flex justify-content-center text-center'>
                        <h4 className='max-w-880 fw-600 fs-33 fc-secondary pt-5 px-4 ff-poppins'>Subscribe to get information, latest news and other
                            interesting offers about Jadoo</h4>
                    </div>
                    <div className='d-sm-flex gap-4 justify-content-center pt-3 pb-5'>
                        <div className='email d-flex align-items-center gap-3 mt-5 mb-3 z-1'>
                            <img src={email} alt="email" />
                            <input type="email" name='email' placeholder='Your email' className='email-2 ff-montserrat cursor' />
                        </div>
                        <div className='mt-5  mb-3 d-flex justify-content-center'>
                            <button className='fw-600 fs-17 fc-white button-1 ff-open-sans'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Section_six