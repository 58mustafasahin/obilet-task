import React from 'react'
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import turkey from '../assets/images/turkey-24.png'
import english from '../assets/images/uk-24.png'

const FlagModal = ({ open, setOpen }) => {
    return (
        <Modal isOpen={open} toggle={() => setOpen(!open)} centered>
            <ModalHeader toggle={() => setOpen(!open)}>Dil Seçimi</ModalHeader>
            <ModalBody>
                <Row style={{ width: "300px" }}>
                    <Col lg="6" style={{ display: 'flex', alignItems: 'center' }}>
                        <Button style={{ backgroundColor: 'transparent', border:'none', display: 'flex', gap: '5px' }}>

                            <img src={turkey} style={{ width: '100%', height: '100%', border: '1px solid #fff', borderRadius: "100px", overflow: 'hidden', width: '24px', height: '24px' }}></img>
                            <span style={{ color: 'black' }}>Türkçe</span>
                        </Button>
                    </Col>

                    <Col lg="6" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Button style={{ backgroundColor: 'transparent',border:'none', display: 'flex', gap: '5px' }}>
                            <img src={english} style={{ width: '100%', height: '100%', border: '1px solid #fff', borderRadius: "100px", overflow: 'hidden', width: '24px', height: '24px' }}></img>
                            <span style={{ color: 'black' }}>English</span>
                        </Button>
                    </Col>

                </Row>
            </ModalBody>
        </Modal>
    )
}

export default FlagModal