import "./App.css";
import EventsHeader from "./images/events_header.jpg";
import React, { useEffect, useState } from "react";
import art1 from "./images/ART1.jpg";
import art2 from "./images/ART2.jpg";
import art3 from "./images/ART3.jpg";
import art4 from "./images/ART4.jpg";
import art5 from "./images/ART5.jpg";
import art6 from "./images/ART6.jpg";
import pcLogo from "./images/pclogo.png";

function App() {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    const strings = [
      "Hello World",
      "Production Club",
      "Los Angles, CA",
      "The Sunshine State",
    ];
    let index = 0;
    const timerId = setInterval(() => {
      setDisplayText(strings[index]);
      index += 1;
      if (index === strings.length) {
        clearInterval(timerId);
      }
    }, 3000);
  }, []);

  return (
    <div className="App">
      <section className="HeaderSection">
        <img src={EventsHeader} className="EventsHeader" alt="eventsheader" />
        <div className="getStarted">
          <h3 className="starth3">GET STARTED</h3>
        </div>
      </section>
      <h1>{displayText}</h1>
      <div className="scroll"></div>
      <section className="ArtSection">
        <img src={art1} className="art" alt="productionclub" />
        <img src={art2} className="art" alt="productionclub" />
        <img src={art3} className="art" alt="productionclub" />
        <img src={art4} className="art" alt="productionclub" />
        <img src={art5} className="art" alt="productionclub" />
        <img src={art6} className="art" alt="productionclub" />
      </section>
      <article className="Paragraph">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
      <section className="colors">
        <div className="RedDiv">
          <img src={pcLogo} className="logo" alt="pclogo" />
        </div>
        <div className="colorsDiv">
          <div className="black" />
          <div className="whiteNyellow">
            <div className="yellow" />
            <div className="white" />
          </div>
        </div>
      </section>
      <div className="emailForm">
        <form className="form">
          <input
            type="email"
            className="email"
            placeholder="Enter your email address"
          ></input>
          <div className="subscribe">
            <h3 className="subscribeh3">SUBSCRIBE</h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
