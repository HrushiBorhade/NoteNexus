import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function LandingPage({}) {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate, userInfo]);
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">NoteNexus</h1>
              <p className="subtitle">Maximize Your Productivity!</p>
            </div>
            <div className="buttonContainer">
              <>
                <Button size="lg" className="landingbutton" href="/login">
                  Login
                </Button>
              </>
              <>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                  href="/register"
                >
                  Signup
                </Button>
              </>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
