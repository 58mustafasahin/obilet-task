import React, { useState } from 'react'
import { Button, Col, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Row } from 'reactstrap'
import logo from '../assets/images/obilet_logo.png'
import turkey from '../assets/images/turkey-24.png'
import FlagModal from './FlagModal'

const CustomNavbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <Navbar
            style={{ backgroundColor: '#d23b38', height: '10vh' }}
            expand="md"
            light
        >
            <Col lg="5" md="5" sm="5" xs="12" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
                <NavbarBrand

                    href="/"
                >
                    <img src={logo} width="175" style={{ float: 'right' }} />
                </NavbarBrand>
            </Col>
            {/* <NavbarToggler
                className="me-2"
                onClick={function noRefCheck() { }}
            /> */}
            <Collapse navbar>
                <Col lg="7" md="7" sm="7" xs="12">
                    <Nav navbar style={{ flexDirection: 'row', justifyContent: 'end' }}>
                        <NavItem>
                            <NavLink href="/components/" style={{ color: 'white', borderRight: '1px solid white', paddingTop: '1px', paddingBottom: '1px' }}>
                                Üye Girişi
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" style={{ color: 'white', borderRight: '1px solid white', paddingTop: '1px', paddingBottom: '1px' }}>
                                Biletlerim
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" style={{ color: 'white', paddingTop: '1px', paddingBottom: '1px' }}>
                                Yardım
                            </NavLink>
                        </NavItem>
                        <NavItem>
                        </NavItem>
                    </Nav>
                </Col>
                <Col lg="2" md="2" sm="2" xs="12" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', cursor: 'pointer' }}>
                    <div style={{ width: '24px', height: '24px' }}>
                        <img onClick={() => setOpen(true)} src={turkey} style={{ width: '100%', height: '100%', border: '1px solid #fff', borderRadius: "100px", overflow: 'hidden' }}></img>
                    </div>
                    <FlagModal
                        open={open}
                        setOpen={setOpen}
                    ></FlagModal>
                </Col>
            </Collapse>
        </Navbar>
    )
}

export default CustomNavbar