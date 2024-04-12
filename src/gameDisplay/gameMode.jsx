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
  let nami = ["Nami", "public/nami.webp"];
  let whitebeard = [
    "Whitebeard",
    "public/whitebeard.webp",
  ];
  let luffy = ["Luffy", "public/luffy.webp"];
  let ace = ["Ace", "public/ace.webp"];
  let brook = ["Brook", "public/brook.webp"];
  let jinbe = ["Jinbe", "public/jinbe.webp"];
  let law = ["Law", "public/law.webp"];
  let robin = ["Robin", "public/robin.webp"];
  let roger = ["Gol D Roger", "public/roger.webp"];
  let sabo = ["Sabo", "public/sabo.webp"];
  let sanji = ["Sanji", "public/sanji.webp"];
  let shanks = ["Shanks", "public/shanks.webp"];
  let zoro = ["Zoro", "public/zoro.webp"];

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
  let hinata = ["Hyuga Hinata", "public/hinata.jpg"];
  let itachi = ["Uchiha Itachi", "public/itachi.jpg"];
  let jiraiya = ["Jiraiya", "public/jiraiya.jpg"];
  let kakashi = ["Hatake Kakashi", "public/kakashi.jpg"];
  let madara = ["Uchiha Madara", "public/madara.jpg"];
  let naruto = ["Uzumaki Naruto", "public/naruto.jpg"];
  let neji = ["Hyuga Neji", "public/neji.jpg"];
  let obito = ["Uchiha Obito", "public/obito.jpg"];
  let pain = ["Pain", "public/pain.jpg"];
  let lee = ["Rock Lee", "public/rockLee.jpg"];
  let sakura = ["Haruno Sakura", "public/sakura.jpg"];
  let sasuke = ["Uchiha Sasuke", "public/sasuke.jpg"];
  let shikamaru = [
    "Nara Shikamaru",
    "public/shikamaru.jpg",
  ];
  let tsunade = ["Senju Tsunade", "public/tsunade.jpg"];

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
    "public/android17.jpg",
  ];
  let bardock = ["Bardock", "public/bardock.jpg"];
  let broly = ["Broly", "public/broly.jpg"];
  let frieza = ["Frieza", "public/frieza.jpg"];
  let gohan = ["Gohan", "public/gohan.jpg"];
  let Goku = ["Goku", "public/goku.jpg"];
  let majinBuu = ["Majin Buu", "public/majinBuu.jpg"];
  let roshi = ["Master Roshi", "public/roshi.jpg"];
  let trunks = ["Future Trunks", "public/trunks.jpg"];
  let vegeta = ["Vegeta", "public/vegeta.jpg"];

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
