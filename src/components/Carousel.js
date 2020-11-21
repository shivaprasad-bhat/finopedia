import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';

const CarouselBox = () => {
    return (
        <Row>
            <Col>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src="/images/fin-1.jpg"
                            alt="First slide"
                            style={styles.carouselImage}
                        />
                        <Carousel.Caption style={styles.carouselCaption}>
                            <h3>Innovate</h3>
                            <p>Finance is the field where you can innovate</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src="/images/fin-2.jpg"
                            alt="Third slide"
                            style={styles.carouselImage}
                        />
                        <Carousel.Caption style={styles.carouselCaption}>
                            <h3>Invest and Earn</h3>
                            <p>Invest properly, earn money</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/fin-3.png"
                            alt="Third slide"
                            style={styles.carouselImage}
                        />
                        <Carousel.Caption style={styles.carouselCaption}>
                            <h3>Invest and Earn</h3>
                            <p>Invest properly, earn money</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    );
};

const styles = {
    carouselCaption: {
        color: 'black',
        'background-color': 'aliceblue',
    },
    carouselImage: {
        minHeight: '90vh',
    },
};

export default CarouselBox;
