import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import SearchTicket from '../components/SearchTicket'
import '../assets/css/Home.css'
import Vehicles from '../components/Vehicles'

const Home = () => {
    return (
        <div style={{ height: '90vh', width: '100%' }}>
            <Vehicles/>
            <div style={{ height: '90%', display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Row className='imgRow'>
                    <Col xl='5' lg='7' md='12' sm='12' xs='12' className='searchTicketCol'>
                        <SearchTicket />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Home