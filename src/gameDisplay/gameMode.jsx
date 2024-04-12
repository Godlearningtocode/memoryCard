/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./gameMode.css";
import EasyMode from "../gameLogics/gameLogic";

export default function DisplayGameSection({
  themeName,
  themeLogo,
  gameDifficulty,
  score,
  setScore,
  highScore,
  setHighScore,
  setGameDifficulty,
}) {
  const [gameOver, setGameOver] = useState(false);

  // One Piece Characters variable assignment and array assignment
  let nami = ["Nami", "/nami.webp"];
  let whitebeard = [
    "Whitebeard",
    "/whitebeard.webp",
  ];
  let luffy = ["Luffy", "/luffy.webp"];
  let ace = ["Ace", "/ace.webp"];
  let brook = ["Brook", "/brook.webp"];
  let jinbe = ["Jinbe", "/jinbe.webp"];
  let law = ["Law", "/law.webp"];
  let robin = ["Robin", "/robin.webp"];
  let roger = ["Gol D Roger", "/roger.webp"];
  let sabo = ["Sabo", "/sabo.webp"];
  let sanji = ["Sanji", "/sanji.webp"];
  let shanks = ["Shanks", "/shanks.webp"];
  let zoro = ["Zoro", "/zoro.webp"];

  let onePieceList = [];
  onePieceList.push(
    nami,
    whitebeard,
    luffy,
    ace,
    brook,
    jinbe,
    law,
    robin,
    roger,
    sabo,
    sanji,
    shanks,
    zoro
  );

  // Naruto characters variable assigment and array populating
  let hinata = ["Hyuga Hinata", "/hinata.jpg"];
  let itachi = ["Uchiha Itachi", "/itachi.jpg"];
  let jiraiya = ["Jiraiya", "/jiraiya.jpg"];
  let kakashi = ["Hatake Kakashi", "/kakashi.jpg"];
  let madara = ["Uchiha Madara", "/madara.jpg"];
  let naruto = ["Uzumaki Naruto", "/naruto.jpg"];
  let neji = ["Hyuga Neji", "/neji.jpg"];
  let obito = ["Uchiha Obito", "/obito.jpg"];
  let pain = ["Pain", "/pain.jpg"];
  let lee = ["Rock Lee", "/rockLee.jpg"];
  let sakura = ["Haruno Sakura", "/sakura.jpg"];
  let sasuke = ["Uchiha Sasuke", "/sasuke.jpg"];
  let shikamaru = [
    "Nara Shikamaru",
    "/shikamaru.jpg",
  ];
  let tsunade = ["Senju Tsunade", "/tsunade.jpg"];

  let narutoList = [];
  narutoList.push(
    hinata,
    itachi,
    jiraiya,
    kakashi,
    madara,
    neji,
    naruto,
    obito,
    pain,
    lee,
    sakura,
    sasuke,
    shikamaru,
    tsunade
  );

  //  Dragon Ball characters variable assignment and array populating
  let android17 = [
    "Android 17",
    "/android17.jpg",
  ];
  let bardock = ["Bardock", "/bardock.jpg"];
  let broly = ["Broly", "/broly.jpg"];
  let frieza = ["Frieza", "/frieza.jpg"];
  let gohan = ["Gohan", "/gohan.jpg"];
  let Goku = ["Goku", "/goku.jpg"];
  let majinBuu = ["Majin Buu", "/majinBuu.jpg"];
  let roshi = ["Master Roshi", "/roshi.jpg"];
  let trunks = ["Future Trunks", "/trunks.jpg"];
  let vegeta = ["Vegeta", "/vegeta.jpg"];

  let dragonBallList = [];
  dragonBallList.push(
    android17,
    bardock,
    broly,
    frieza,
    gohan,
    Goku,
    majinBuu,
    roshi,
    trunks,
    vegeta
  );

  useEffect(() => {
    highScore < score ? setHighScore(score) : {};
  }, [score]);

  return (
    <>
      <div id="gameSection">
        <div className="heading topLeftContainer">
          <img
            src={themeLogo}
            alt=""
            className="headingName"
            width={300 + "px"}
            height={100 + "px"}
          />
        </div>
        <div className="scoreboardContainer">
          <div className="scoreCard">Score: {score}</div>
          <div className="bestScoreCard">Highscore: {highScore}</div>
        </div>
        <EasyMode
          onePieceList={onePieceList}
          narutoList={narutoList}
          dragonBallList={dragonBallList}
          score={score}
          setScore={setScore}
          gameOver={gameOver}
          setGameOver={setGameOver}
          gameDifficulty={gameDifficulty}
          setGameDifficulty={setGameDifficulty}
          themeName={themeName}
        />
      </div>
    </>
  );
}
