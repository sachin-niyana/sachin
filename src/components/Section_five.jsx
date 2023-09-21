import React from 'react'
import axon from '../assets/png/axon.png';
import jetstar from '../assets/png/jetstar.png';
import expedia from '../assets/png/expedia.png';
import qantas from '../assets/png/qantas.png';
import litalia from '../assets/png/litalia.png';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Section_five = () => {
    return (
        <Container className='overflow-hidden'>
            <Row>
                <Col lg={5} className='d-sm-flex justify-content-center gap-5'>
                    <Link><img className='exon mt-5' src={axon} alt="axon" /></Link>
                    <Link><img className='exon mt-5' src={jetstar} alt="jetatar" /></Link>
                </Col>
                <Col lg={7} className='d-md-flex justify-content-lg-between justify-content-center'>
                    <Link><img className='exon mt-5' src={expedia} alt="expedia" /></Link>
                    <Link><img className='exon-2 mt-5' src={qantas} alt="qantas" /></Link>
                    <Link><img className='exon-2 mt-5' src={litalia} alt="litalia" /></Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Section_five