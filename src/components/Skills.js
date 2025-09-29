import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import ColourSharp from "../assets/img/color-sharp.png"
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Temp</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img alt="" />
                                    <h5>Title</h5>
                                </div>
                                <div className="item">
                                    <img alt="" />
                                    <h5>Title</h5>
                                </div>
                                <div className="item">
                                    <img alt="" />
                                    <h5>Title</h5>
                                </div>
                                <div className="item">
                                    <img alt="" />
                                    <h5>Title</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={ColourSharp} />
        </section>
    );
}

export default Skills;