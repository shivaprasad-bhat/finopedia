import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from './Carousel';
const Home = () => {
    return (
        <>
            <Row>
                <Col>
                    <Carousel />
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1 style={css}>Finoedia</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste, aut! Nam voluptate modi blanditiis facere
                        praesentium aliquid, quos vel soluta recusandae
                        voluptatum, exercitationem sequi et possimus maiores
                        necessitatibus nemo suscipit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste, aut! Nam voluptate modi blanditiis facere
                        praesentium aliquid, quos vel soluta recusandae
                        voluptatum, exercitationem sequi et possimus maiores
                        necessitatibus nemo suscipit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste, aut! Nam voluptate modi blanditiis facere
                        praesentium aliquid, quos vel soluta recusandae
                        voluptatum, exercitationem sequi et possimus maiores
                        necessitatibus nemo suscipit.
                    </p>
                </Col>
            </Row>
        </>
    );
};

const css = {
    'text-align': 'center',
    'margin-top': '2%',
};

export default Home;
