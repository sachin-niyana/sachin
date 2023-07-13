import React from 'react'
import axon from '../assets/png/axon.png';
import jetstar from '../assets/png/jetstar.png';
import expedia from '../assets/png/expedia.png';
import qantas from '../assets/png/qantas.png';
import litalia from '../assets/png/litalia.png';
import { Col, Container, Row } from 'react-bootstrap';
const Section_five = () => {
    return (
        <Container className='overflow-hidden'>
            <Row>
                <Col lg={5} className='d-sm-flex justify-content-center gap-5'>
                    <a href="#"><img className='exon mt-5' src={axon} alt="axon" /></a>
                    <a href="#"><img className='exon mt-5' src={jetstar} alt="jetatar" /></a>
                </Col>
                <Col lg={7} className='d-md-flex justify-content-lg-between justify-content-center'>
                    <a href="#"><img className='exon mt-5' src={expedia} alt="expedia" /></a>
                    <a href="#"><img className='exon-2 mt-5' src={qantas} alt="qantas" /></a>
                    <a href="#"><img className='exon-2 mt-5' src={litalia} alt="litalia" /></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Section_five