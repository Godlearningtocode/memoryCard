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
  let nami = ["Nami", "public/onePiece-Characters/nami.webp"];
  let whitebeard = [
    "Whitebeard",
    "public/onePiece-Characters/whitebeard.webp",
  ];
  let luffy = ["Luffy", "public/onePiece-Characters/luffy.webp"];
  let ace = ["Ace", "public/onePiece-Characters/ace.webp"];
  let brook = ["Brook", "public/onePiece-Characters/brook.webp"];
  let jinbe = ["Jinbe", "public/onePiece-Characters/jinbe.webp"];
  let law = ["Law", "public/onePiece-Characters/law.webp"];
  let robin = ["Robin", "public/onePiece-Characters/robin.webp"];
  let roger = ["Gol D Roger", "public/onePiece-Characters/roger.webp"];
  let sabo = ["Sabo", "public/onePiece-Characters/sabo.webp"];
  let sanji = ["Sanji", "public/onePiece-Characters/sanji.webp"];
  let shanks = ["Shanks", "public/onePiece-Characters/shanks.webp"];
  let zoro = ["Zoro", "public/onePiece-Characters/zoro.webp"];

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
  let hinata = ["Hyuga Hinata", "public/naruto-characters/hinata.jpg"];
  let itachi = ["Uchiha Itachi", "public/naruto-characters/itachi.jpg"];
  let jiraiya = ["Jiraiya", "public/naruto-characters/jiraiya.jpg"];
  let kakashi = ["Hatake Kakashi", "public/naruto-characters/kakashi.jpg"];
  let madara = ["Uchiha Madara", "public/naruto-characters/madara.jpg"];
  let naruto = ["Uzumaki Naruto", "public/naruto-characters/naruto.jpg"];
  let neji = ["Hyuga Neji", "public/naruto-characters/neji.jpg"];
  let obito = ["Uchiha Obito", "public/naruto-characters/obito.jpg"];
  let pain = ["Pain", "public/naruto-characters/pain.jpg"];
  let lee = ["Rock Lee", "public/naruto-characters/rockLee.jpg"];
  let sakura = ["Haruno Sakura", "public/naruto-characters/sakura.jpg"];
  let sasuke = ["Uchiha Sasuke", "public/naruto-characters/sasuke.jpg"];
  let shikamaru = [
    "Nara Shikamaru",
    "public/naruto-characters/shikamaru.jpg",
  ];
  let tsunade = ["Senju Tsunade", "public/naruto-characters/tsunade.jpg"];

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
    "public/dragonBall-characters/android17.jpg",
  ];
  let bardock = ["Bardock", "public/dragonBall-characters/bardock.jpg"];
  let broly = ["Broly", "public/dragonBall-characters/broly.jpg"];
  let frieza = ["Frieza", "public/dragonBall-characters/frieza.jpg"];
  let gohan = ["Gohan", "public/dragonBall-characters/gohan.jpg"];
  let Goku = ["Goku", "public/dragonBall-characters/goku.jpg"];
  let majinBuu = ["Majin Buu", "public/dragonBall-characters/majinBuu.jpg"];
  let roshi = ["Master Roshi", "public/dragonBall-characters/roshi.jpg"];
  let trunks = ["Future Trunks", "public/dragonBall-characters/trunks.jpg"];
  let vegeta = ["Vegeta", "public/dragonBall-characters/vegeta.jpg"];

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
