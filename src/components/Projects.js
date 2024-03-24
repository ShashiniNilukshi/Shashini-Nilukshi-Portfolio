import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Happypaws.png";
import projImg2 from "../assets/img/RythemDay.png";
import projImg3 from "../assets/img/TicTacToe.png";
import projImg4 from "../assets/img/Onlineshop.png";
import projImg5 from "../assets/img/Moviebooking.png";
import projImg6 from "../assets/img/StudentMarks.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Happy Paws Website",
      description: "Developed a full stack web app by react, nodejs, python and firebase database,Trained the ML model using python",
      imgUrl: projImg1,
    },
    {
      title: "RythemDay Website",
      description: "React frontend interacts with Python ML backend to recommend music based on user preferences through a web interface.",
      imgUrl: projImg2,
    },
    {
      title: "Tic-Tac-Toe",
      description: "Python Tic-Tac-Toe with Minimax: Implement game logic and AI to ensure optimal moves using recursive algorithm.",
      imgUrl: projImg3,
    },
    {
      title: "Online Shop",
      description: "Java program simulates product buying system using Object-Oriented Programming. GUI built with Java Swing facilitates user interaction.",
      imgUrl: projImg4,
    },
    {
      title: "Theatre Booking System",
      description: "Java-based theatre booking system manages seat availability, reservations, and payments, facilitating seamless ticket booking for users.",
      imgUrl: projImg5,
    },
    {
      title: "Student Mark Management System",
      description: "Created a basic Python program as part of university coursework.The program could be related to a specific subject or problem given by the coursework requirements.",
      imgUrl: projImg6,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                
                    
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
