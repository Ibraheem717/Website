import React from 'react';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import headerImg from '../assets/img/header-img.svg'


const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const toRotate = [ "Software Engineer", "Test Engineer" ]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isTyping ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        console.log(updatedText, isTyping, delta)

        setText(updatedText);
        if (isTyping) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isTyping && updatedText === fullText) {
            setIsTyping(true);
            setDelta(period);
        } else if (isTyping && updatedText === '') {
            setIsTyping(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => clearInterval(ticker);
    }, [text])



    

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>
                            Welcome to my portfolio 
                        </span>
                        <h1>{`Ibraheem Samih `}<span className='wrap'>{text}</span></h1>
                        <p>About me</p>
                        <button onClick={() => console.log('Clicked')}>Hello <i class="bi bi-arrow-right-circle" /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Text" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;