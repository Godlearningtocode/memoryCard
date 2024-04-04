import { useEffect, useState } from "react";
import "./homePage.css";
import DisplayGameSection from "../gameDisplay/gameDisplay";

export default function DisplayHomePage() {
  const [themeName, setThemeName] = useState("One Piece");
  const [themeFont, setThemeFont] = useState("onePiece");
  const [themeBackground, setThemeBackground] = useState(
    "src/assets/onePiece1.jpg"
  );
  const [themeAudio, setThemeAudio] = useState(
    "src/assets/drumsOfLiberation.mp3"
  );
  const [soundBoxImage, setSoundBoxImage] = useState(
    "src/assets/sound-off.png"
  );
  const [gameDifficulty, setGameDifficulty] = useState(false);

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
    setThemeAudio("src/assets/Naruto.mp3");
  }

  function ChangethemeDragonball() {
    setThemeName("Dragon Ball");
    setThemeFont("dragonBall");
    setThemeBackground("src/assets/dragonBall3.jpg");
    setThemeAudio("src/assets/dragonBallAudio.mp3");
    document.body.style.color = "white";
    document.querySelector(".bottomLeftContainer").style.color = "black";
    let difficultyCards = document.querySelectorAll(".difficultyCard");
    difficultyCards.forEach((Element) => {
      Element.classList.add("activeTheme");
    });
  }

  function ChangeThemeOnePiece() {
    setThemeName("One Piece");
    setThemeFont("onePiece");
    setThemeBackground("src/assets/onePiece1.jpg");
    setThemeAudio("src/assets/drumsOfLiberation.mp3");
    document.body.style.color = "black";
    let difficultyCards = document.querySelectorAll(".difficultyCard");
    difficultyCards.forEach((Element) => {
      Element.classList.remove("activeTheme");
    });
  }

  useEffect(() => {
    document
      .querySelector(".bottomLeftContainer")
      .addEventListener("click", () => {
        themeName === "One Piece"
          ? ChangeThemeNaruto()
          : themeName === "Naruto"
          ? ChangethemeDragonball()
          : ChangeThemeOnePiece();
      });
  }, [themeName]);

  function AudioPlay() {
    const audioElement = document.querySelector("#audioElement");
    if (audioElement) {
      if (audioElement.muted) {
        audioElement.muted = false;
        setSoundBoxImage("src/assets/sound-on.png");
      } else {
        audioElement.muted = true;
        setSoundBoxImage("src/assets/sound-off.png");
      }
      audioElement
        .play()
        .catch((error) => console.error("error playing audio:", error));
    }
  }

  function setDifficultyEasy() {
    setGameDifficulty("easy");
  }

  function setDifficultyMedium() {
    setGameDifficulty("medium");
  }

  function setDifficultyHard() {
    setGameDifficulty("hard");
  }

  function DisplayCenterSection() {
    return (
      <>
        <div className="heading">{themeName}</div>
        <div className="heading2">Memory Game</div>
        <div className="difficultyContainer">
          <div className="difficultyCard" onClick={setDifficultyEasy}>
            Easy
          </div>
          <div className="difficultyCard" onClick={setDifficultyMedium}>
            Medium
          </div>
          <div className="difficultyCard" onClick={setDifficultyHard}>
            Hard
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div id="homeSection" style={sectionStyle}>
        {gameDifficulty === false ? (
          <DisplayCenterSection />
        ) : (
          <DisplayGameSection
            themeName={themeName}
            gameDifficulty={gameDifficulty}
          />
        )}

        <div className="bottomRightContainer">
          <div className="soundBoxContainer" onClick={AudioPlay}>
            <img src={soundBoxImage} className="bottomBoxImage" alt="Sound" />
            <audio id="audioElement" src={themeAudio} autoPlay></audio>
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
