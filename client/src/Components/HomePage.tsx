import { Button } from "@mui/material";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "../css/Home.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: yellow,
  },
});

const HomePage = () => {
  return (
    <section className="homepage">
      <section className="left-align">
        <div className="home-title">
          <h1 className="home-title-1">Be a geography whizz</h1>
          <h1 className="home-title-2">with our Jeography quizz!</h1>
        </div>
        <section className="home-welcome">
          <p>
            Take a quiz and collect your badge, it's called Jeo. Win at
            geography and watch your collection grow.
          </p>
        </section>
          <section className="button-container">
            <ThemeProvider theme={theme}>
              <Link to="/teacher">
                <Button size="small" variant="contained" color="secondary">
                  I'm a teacher
                </Button>
              </Link>
              <Link to="/select_quiz">
              <Button className="student-btn" size="small" variant="contained">
                I'm a student
              </Button>
            </Link>
            </ThemeProvider>
          </section>
      </section>
      <section>
          <img
            className="gif"
            
            src="https://media.giphy.com/media/UOdoMz3baCENO/giphy.gif"
            ></img>
            </section>
    </section>
  );
};

export default HomePage;
