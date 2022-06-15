import React from "react";

export default function Header({darkMode, clickMe}) {
  return (
    <header className= {darkMode? "dark": ""}>
      <img
        src="./images/troll-face.png"
        className="header--image"
        alt="trolle"
      />
      <h2 className="header--title">Meme Generator</h2>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={clickMe} >
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </header>
  );
}
