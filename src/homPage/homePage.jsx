/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./homePage.css";
import DisplayGameSection from "../gameDisplay/gameMode";
import DisplayGif from "../gifDisplay/displayGif";

export default function DisplayHomePage() {
  const [watchGIF, setWatchGIF] = useState(false);
  const [showHelpBox, setShowHelpBox] = useState(false);
  const [themeName, setThemeName] = useState("One Piece");
  const [themeFont, setThemeFont] = useState("onePiece");
  const [themeLogo, setThemeLogo] = useState("");
  const [themeBackground, setThemeBackground] = useState(
    "/onePiece1.jpg"
  );
  const [themeAudio, setThemeAudio] = useState(
    "/drumsOfLiberation.mp3"
  );
  const [soundBoxImage, setSoundBoxImage] = useState(
    "/sound-off.png"
  );
  const [gameDifficulty, setGameDifficulty] = useState(false);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${themeBackground})`;
  }, [themeBackground]);

  const sectionStyle = {
    fontFamily: themeFont,
  };
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gifs, setGifs] = useState([]);
  const [newGif, setNewGif] = useState(1)

  function fetchNewGif() {
    setNewGif(newGif + 1)
  }

  useEffect(() => {
    const fetchGifs = async () => {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=d2FE15EsXoKpRksn5uUeqoJv4S9stUkr&q=${themeName}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
      try {
        const response = await fetch(url);
        const { data } = await response.json();
        setGifs(data[Math.floor(Math.random() * 11)]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGifs();
  }, [themeName, newGif]);

  function ChangeThemeNaruto() {
    setThemeName("Naruto");
    setThemeFont("naruto");
    setThemeBackground("/naruto2.jpg");
    setThemeAudio("/Naruto.mp3");
  }

  function ChangethemeDragonball() {
    setThemeName("Dragon Ball");
    setThemeFont("dragonBall");
    setThemeBackground("/dragonBall3.jpg");
    setThemeAudio("/dragonBallAudio.mp3");
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
    setThemeBackground("/onePiece1.jpg");
    setThemeAudio("/drumsOfLiberation.mp3");
    document.body.style.color = "black";
    let difficultyCards = document.querySelectorAll(".difficultyCard");
    difficultyCards.forEach((Element) => {
      Element.classList.remove("activeTheme");
    });
  }

  function handleThemeName() {
    themeName === "One Piece"
      ? ChangeThemeNaruto()
      : themeName === "Naruto"
      ? ChangethemeDragonball()
      : ChangeThemeOnePiece();
  }

  function AudioPlay() {
    const audioElement = document.querySelector("#audioElement");
    if (audioElement) {
      if (audioElement.muted) {
        audioElement.muted = false;
        setSoundBoxImage("/sound-on.png");
      } else {
        audioElement.muted = true;
        setSoundBoxImage("/sound-off.png");
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

  function HeadingName() {
    themeName === "One Piece"
      ? setThemeLogo("/onePieceLogo.png")
      : themeName === "Naruto"
      ? setThemeLogo("/narutoLogo.png")
      : themeName === "Dragon Ball"
      ? setThemeLogo("/dragonballLogo.png")
      : setThemeLogo("");
  }

  useEffect(() => {
    HeadingName();
  }, [themeName]);

  function DisplayCenterSection() {
    return (
      <>
        <div className="heading">
          <img
            src={themeLogo}
            alt=""
            className="headingName"
            width={500 + "px"}
            height={200 + "px"}
          />
        </div>
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

  function HelpBoxDisplay() {
    setShowHelpBox(!showHelpBox);
  }

  function watchGif() {
    setWatchGIF(!watchGIF);
  }

  return (
    <>
      <div id="homeSection" style={sectionStyle}>
        {watchGIF === true ? (
          <DisplayGif gifs={gifs} />
        ) : gameDifficulty === false ? (
          <DisplayCenterSection />
        ) : (
          <DisplayGameSection
            themeName={themeName}
            themeLogo={themeLogo}
            gameDifficulty={gameDifficulty}
            setGameDifficulty={setGameDifficulty}
            score={score}
            setScore={setScore}
            highScore={highScore}
            setHighScore={setHighScore}
          />
        )}

        <div className="bottomRightContainer">
          <div className="soundBoxContainer" onClick={AudioPlay}>
            <img src={soundBoxImage} className="bottomBoxImage" alt="Sound" />
            <audio id="audioElement" src={themeAudio} autoPlay></audio>
          </div>
          <div className="helpBoxContainer" onClick={HelpBoxDisplay}>
            <img
              src="/help.png"
              className="bottomBoxImage"
              alt="Help"
            />
          </div>
        </div>
        {gameDifficulty === false && (
          <div className="bottomLeftContainer" onClick={handleThemeName}>
            Theme
          </div>
        )}
        {showHelpBox === true && (
          <div className="helpBoxCard">
            Choose a character that you have not picked before. Succesfully pick
            5 in a row to win the game.
          </div>
        )}
        {watchGIF === false ? (
          <div className="topRightContainer" onClick={watchGif}>
            Or watch a gif instead?
          </div>
        ) : (
          <div className="topRightContainer" >
            <div className="playGameContainer" onClick={watchGif}>Or play a game instead?</div>
            <div className="newGifContainer" onClick={fetchNewGif}>New GIF</div>
          </div>

        )}
              <footer>Made by: Shivam Agarwal</footer>
      </div>

    </>
  );
}
