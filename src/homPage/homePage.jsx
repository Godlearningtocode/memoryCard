import { useEffect, useState, useTransition } from "react";
import "./homePage.css";

export default function DisplayHomePage() {
  const [themeName, setThemeName] = useState("One Piece");
  const [themeFont, setThemeFont] = useState("onePiece");
  const [themeBackground, setThemeBackground] = useState(
    "src/assets/onePiece1.jpg"
  );
  const [themeAudio, setThemeAudio] = useState("src/assets/drumsOfLiberation.mp3")

  useEffect(() => {
    document.body.style.backgroundImage = `url(${themeBackground})`;
  }, [themeBackground]);

  const sectionStyle = {
    fontFamily: themeFont,
  };

  function ChangeThemeNaruto() {
    setThemeName("Naruto");
    setThemeFont("naruto");
    setThemeBackground("src/assets/naruto2.jpg");
  }

  function ChangethemeDragonball() {
    setThemeName("Dragon Ball");
    setThemeFont("dragonBall");
    setThemeBackground("src/assets/dragonBall3.jpg");
    document.body.style.color = 'white'
    document.querySelector('.bottomLeftContainer').style.color = 'black'
    let difficultyCards = document.querySelectorAll('.difficultyCard')
    difficultyCards.forEach((Element) => {
      Element.classList.add('activeTheme')
    })
  }

  function ChangeThemeOnePiece() {
    setThemeName("One Piece");
    setThemeFont("onePiece");
    setThemeBackground("src/assets/onePiece1.jpg");
    document.body.style.color = 'black'
    let difficultyCards = document.querySelectorAll('.difficultyCard')
    difficultyCards.forEach((Element) => {
      Element.classList.remove('activeTheme')
    })
  }

  useEffect(() => {
    document.querySelector(".bottomLeftContainer")
    .addEventListener("click", () => {
      themeName === "One Piece"
        ? ChangeThemeNaruto()
        : themeName === "Naruto"
        ? ChangethemeDragonball()
        : ChangeThemeOnePiece();
    });
  }, [themeName])

  return (
    <>
      <div id="homeSection" style={sectionStyle}>
        <div className="heading">{themeName}</div>
        <div className="heading2">Memory Game</div>
        <div className="difficultyContainer">
          <div className="difficultyCard">Easy</div>
          <div className="difficultyCard">Medium</div>
          <div className="difficultyCard">Hard</div>
        </div>
        <div className="bottomRightContainer">
          <div className="soundBoxContainer">
            <img
              src="src/assets/sound-on.png"
              className="bottomBoxImage"
              alt="Sound"
            />
            <audio src={themeAudio} autoPlay></audio>
          </div>
          <div className="helpBoxContainer">
            <img
              src="src/assets/help.png"
              className="bottomBoxImage"
              alt="Help"
            />
          </div>
        </div>
        <div className="bottomLeftContainer">Theme</div>
      </div>
    </>
  );
}
