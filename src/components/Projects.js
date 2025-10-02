import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import ColourSharp2 from "../assets/img/color-sharp.png"
import CyberCity from "../assets/img/CC.png";
import AuctiopApp from "../assets/img/AA.png";
import MineSweeper from "../assets/img/mineswep.png";
import Chess from "../assets/img/chess.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

    const projects = [
        {
        title: "CyberCity",
        description: "CyberCity is a turn based strategy game. You progress through two levels defeating enemies in strategic turn-based combat and picking up clues on your way that progress the story. Collect all the clues in the two levels to complete the game!",
        imgUrl: CyberCity,
        link: "https://github.com/aadamhuda/gameDev",
        },
                {
        title: "Auction App",
        description: "This auction app was created via Django and Vue. Users can sign up and login into a app where they can post items to sell!",
        imgUrl: AuctiopApp,
        link: "https://github.com/Ibraheem717/auctionApp",
        },
                {
        title: "Minesweeper",
        description: "A Java reconstruction of MineSweeper using JFrames. It has three levels different difficulties. Enjoy!",
        imgUrl: MineSweeper,
        link: "https://github.com/Ibraheem717/Minesweeper",
        },
                {
        title: "Chess",
        description: "A Java reconstruction of Chess using JFrames. It has three levels different difficulties. Enjoy!",
        imgUrl: Chess,
        link: "https://github.com/Ibraheem717/Java-Chess",
        },
    ];

    return (
        <section className="project" id="project" href="#project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn animate__slower" : ""}>  
                                <h2>Projects</h2>
                                <p>Below is a list of projects that I have done throughtout work/uni/hobby</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard key={index} {...project} />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second"></Tab.Pane>
                                        <Tab.Pane eventKey="third"></Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={ColourSharp2} />
        </section>
    )

}

export default Projects;