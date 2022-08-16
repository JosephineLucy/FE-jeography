
import {Button} from '@mui/material';
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

import Header from "./Header";


const Home = () => {

    return (
      <div className="HomePage">
      <Header />
      <section>
        <Link to="/england">
          <img
            src="https://i.imgur.com/sOnXmUM.png"
            className="England_Map"
            alt="England Map"
          />
        </Link>
        <Link to="/scotland">
          <img
            src="https://i.imgur.com/HZc9YbY.png"
            className="Scotland_Map"
            alt="Scotland Map"
          />
        </Link>
        <Link to="/wales">
          <img
            src="https://i.imgur.com/ofaYmvB.png"
            className="Wales_Map"
            alt="Wales Map"
          />
        </Link>
        <Link to="/ireland">
          <img
            src="https://i.imgur.com/3qEgyT1.png"
            className="Ireland_Map"
            alt="Ireland Map"
          />
        </Link>
        <Link to="/nIreland">
          <img
            src="https://i.imgur.com/BMvdoFx.png"
            className="Northern_Ireland_Map"
            alt="Northern Ireland Map"
          />
        </Link>
        <Link to="/around-the-world">
          <img
            src="https://i.imgur.com/y51FieR.png"
            className="World_Map"
            alt="World Map"
          />
        </Link>
      </section>
    </div>
    );
  }

  return (
    <section>
      <Header />
      <div>
        <p>Be a geography whizz</p>
        <p>with our Jeography quiz!</p>
      </div>
      <div>
        <p>
          Revise geography and collect animal badges called Jeos. Win at
          geography and watch your Jeo collection grow!
        </p>
        <img src="https://i.imgur.com/72YttcG.png" alt="logo" />
        <Button size="small" variant="contained">
          I'm a teacher
        </Button>
        <Button size="small" variant="contained">
          I'm a student
        </Button>
      </div>
    </section>
  );
};


export default Home;
