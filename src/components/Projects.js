import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { PersonWorkspace, MortarboardFill } from 'react-bootstrap-icons';
import ProjectCard from "./ProjectCard";
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.png';
//import img5 from '../assets/img/img5.png';
//import img6 from '../assets/img/img6.png';
import img7 from '../assets/img/img7.png';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//import {SiLeetcode, SiCodechef, SiGeeksforgeeks} from 'react-icons/si'
import { FaHackerrank } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {

  // Experiences and Education
  const experiences = [

    { year: 'October 2023 - November 2023 (4 weeks)', title: 'Java Programming Intern @ internPE', description: `During my Java programming internship at internPE, I gained hands-on experience in core Java concepts and developed skills in writing  code, understanding object-oriented programming, and implementing data structures. This internship enhanced my problem-solving abilities.`, icon: <PersonWorkspace /> },

    { year: '2021 - 2025', title: 'Dr. A.P.J. Abdul Kalam Technical University', description: 'Bachelor Of Technology - Computer Science and Engineering', icon: <MortarboardFill /> },

    { year: '2019 - 2021', title: 'British School Gurukul', description: 'Higher Secondary School', icon: <MortarboardFill /> }
    // Add more experiences here
  ];

  // Projects

  const projects = [

    {
      title: "MERN SOCIAL MEDIA APP",
      description: "This website allows users to follow and unfollow others, like posts, and chat with each other. ",
      imgUrl: img2,
      url: "https://github.com/ShekharKr1/SOCIAL-MEDIA-APP"
    },


    {
      title: "MERN-RESTAURANT-WEBSITE",
      description: "A cozy restaurant offering table reservations and a diverse menu of delicious dishes, ensuring a delightful dining experience for every guest.",
      imgUrl: img4,
      url: 'https://github.com/ShekharKr1/MERN-RESTAURANT-WEBSITE'
    },

    {
      title: "FASTFOOD WEBSITE",
      description: "This website offers a comprehensive guide to the best fast food joints, from classic favorites to the latest trendy spots. ",
      imgUrl: img1,
      url: "https://fastfood-01.netlify.app/"
    },
    {
      title: "NETFLIX-CLONE",
      description: "Created a Netflix-clone with HTML and CSS, featuring a responsive design and interactive elements, showcasing front-end design skills.",
      imgUrl: img7,
      url: 'https://github.com/ShekharKr1/NETFLIX-CLONE'
    },

    {
      title: "EXPANSE-TRACKER-APP",
      description: "Introducing Expense Tracker, your ultimate financial companion for managing and optimizing your spending.",
      imgUrl: img3,
      url: 'https://github.com/ShekharKr1/REACT-EXPANCE-TRACKER'
    },

  ];

  // Coding Profiles

  const codingProfiles = [
    // { platform: 'LeetCode', icon: <FaHackerrank fontSize={'4.5rem'}/>, username: 'SHEKHAR_KUMAR', Link: 'https://leetcode.com/u/SHEKHAR_KUMAR/' },

    { platform: 'HackerRank', icon: <FaHackerrank fontSize={'4.5rem'} />, username: '@shekharkr620', Link: 'https://www.hackerrank.com/profile/shekharkr620' },

    // { platform: 'GeeksforGeeks', icon: <SiGeeksforgeeks fontSize={'4.5rem'}/>, username: 'shekharkr620', Link: 'https://www.geeksforgeeks.org/user/shekharkr620/' },

    // { platform: 'CodeChef', icon: <SiCodechef fontSize={'4.5rem'}/>, username: 'shekhar_kumar1', Link: 'https://www.codechef.com/users/shekhar_kumar1' },

    //Add more coding profiles here
  ];

  return (
    // Projects
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About Me</h2>
                  <p>As an aspiring FullStack Developer, I possess an impressive skill set in  JavaScript,React.js,Node.js, Express.js and Mongodb. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first" justify={true}>
                    <Nav variant="pills" className="nav-pills mb-5 mt-5 justify-content-center align-items-center " id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item >
                        <Nav.Link eventKey="second">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item >
                        <Nav.Link eventKey="third">Profiles</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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

                      {/* Experience and Education */}
                      <Tab.Pane eventKey="second">
                        <Container className='d-flex justify-content-center align-items-center'>
                          <VerticalTimeline>
                            {experiences.map((experience, index) => (
                              <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element"
                                contentStyle={{ background: 'white', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '25px solid  #f4f4f4' }}
                                date={experience.year}
                                iconStyle={{ background: '#383838', color: '#fff' }}
                                icon={experience.icon}
                              >
                                <h3 className="vertical-timeline-element-title d-flex justify-content-center text-muted">{experience.title}</h3>
                                <span className='d-flex h5 justify-content-around m-4 text-muted'>{experience.description}</span>
                              </VerticalTimelineElement>
                            ))}
                          </VerticalTimeline>
                        </Container>

                        {/* Coding Profile */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Container className='justify-content-between'>
                          <Row>
                            {codingProfiles.map((profile, index) => (
                              <Col key={index} xs={6} sm={3}>
                                <div className="profile d-flex justify-content-center align-items-center flex-column m-4">
                                  <Link to={profile.Link} target='_blank' className='text-decoration-none text-light'>
                                    <div className="icon m-2">{profile.icon}</div>
                                    <div className="platform m-2">{profile.platform}</div>
                                    <div className="username m-2">{profile.username}</div>
                                  </Link>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </Container>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='No img'></img>
    </section>
  )
}

export default Projects;
