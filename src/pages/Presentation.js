import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Code from "../components/CodeEditor";
import GitHubButton from 'react-github-btn';

import { Routes } from "../routes";
import ThemesbergLogoIcon from "../assets/img/themesberg.svg";
import WRLDandTextLogo from "../assets/img/World-Money-23.svg";
import TrinityandTextLogo from "../assets/img/trinity2.svg";
import WRLDLogo from "../assets/img/World-Money-5.svg";
import TrinityLogo from "../assets/img/trinity3.svg";
import MapboxImg from "../assets/img/mockup-map-presentation.png";
import CalendarImg from "../assets/img/mockup-calendar-presentation.png";
import ReactMockupImg from "../assets/img/react-mockup.png";
import BS5IllustrationsImg from "../assets/img/illustrations/bs5-illustrations.svg";
import BS5Logo from "../assets/img/technologies/bootstrap-5-logo.svg";
import ReactLogo from "../assets/img/technologies/react-logo.svg";

import pages from "../data/pages";
import features from "../data/features";

export default () => {
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link as={Link} to={link} className="page-preview page-preview-lg scale-up-hover-2">
          <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name} <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };
  //Navigation Bar + Landing Page
  return (
    <>
    
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <Image src={WRLDLogo} />
            <span className="ms-10000 brand-text d-none d-md-inline">World Money Protocol</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#download">About us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button as={HashLink} to="#download" variant="outline-white" className="ms-3"><FontAwesomeIcon icon={faDownload} className="me-1" /> DOCS</Button>
          </div>
        </Container>
      </Navbar>

{/* Landing Page */}
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block"><span className="fab fa-react"></span></div>
              <h1 className="fw-bolder text-secondary">World Money</h1>
              <p className="text-muted fw-light mb-5 h5">Towards an Equitable Financial Future</p>
              <div className="d-flex align-items-center justify-content-center">
                <Button variant="secondary" as={Link} to={Routes.DashboardOverview.path} className="text-dark me-3">
                  Explore dashboard <FontAwesomeIcon icon={faExternalLinkAlt} className="d-none d-sm-inline ms-1" />
                </Button>
              </div>
              <div className="d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-5">
                <div className="text-center">
                </div>
              </div>
              <div className="d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-3">
                <div className="text-center">
                  <a href="https://www.trinity-labs.xyz/" target="_blank">
                    <p className="text-muted font-small m-0">A Trinity Labs Production</p>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
          
      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 mb-3 d-flex align-items-center">
                <Image src={WRLDLogo} />
                <span className="ms-2 brand-text">About</span>
              </Navbar.Brand>
              <p>World Money is a Stablecoin with decentralized monetary policy, developed by Trinity Labs Engineers and Researchers.</p>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Trinity Labs</span>
              <ul className="links-vertical mt-2">
                <li><Card.Link target="_blank" href="https://themesberg.com/contact">Contact Us</Card.Link></li>
              </ul>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Other</span>
              <ul className="links-vertical mt-2">
                <li><Card.Link target="_blank" href="https://themesberg.com/licensing">License</Card.Link></li>
              </ul>
            </Col>
            
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="mb-md-2">

              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">Copyright © Trinity Labs 2021-<span className="current-year">2022</span>. All rights reserved.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
