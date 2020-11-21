import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <Row>
                <Col
                    className="text-center py-3"
                    style={{
                        fontSize: '12px',
                        marginTop: '30px',
                    }}
                >
                    Copyright &copy; Finoedia ; Designed and Developed By{' '}
                    <a href="https://shivaprasad.tech" target="_blank">
                        Shivaprasad Bhat
                    </a>
                </Col>
            </Row>
        </>
    );
};
export default Footer;
