/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./gameDisplay.css";
import EasyMode from "../gameModes/easyMode";

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
  const [gifs, setGifs] = useState([]);

  const [gameOver, setGameOver] = useState(false);

  //   useEffect(() => {
  //     const fetchGifs = async () => {
  //       const url =
  //         "https://api.giphy.com/v1/gifs/search?api_key=d2FE15EsXoKpRksn5uUeqoJv4S9stUkr&q=luffy&limit=7&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
  //       try {
  //         const response = await fetch(url);
  //         const { data } = await response.json();
  //         setGifs(data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchGifs();
  //   }, []);

  // One Piece Characters variable assignment and array assignment
  let nami = ["Cat burglar Nami", "src/assets/onePiece-Characters/nami.webp"];
  let whitebeard = [
    "Whitebeard",
    "src/assets/onePiece-Characters/whitebeard.webp",
  ];
  let luffy = ["Monkey D Luffy", "src/assets/onePiece-Characters/luffy.webp"];
  let ace = ["Portgas D Ace", "src/assets/onePiece-Characters/ace.webp"];
  let brook = ["Soul king Brook", "src/assets/onePiece-Characters/brook.webp"];
  let jinbe = [
    "Knight of the Sea Jinbe",
    "src/assets/onePiece-Characters/jinbe.webp",
  ];
  let law = ["Surgeon of Death", "src/assets/onePiece-Characters/law.webp"];
  let robin = [
    "Devil Child Robin",
    "src/assets/onePiece-Characters/robin.webp",
  ];
  let roger = [
    "King of the Pirates",
    "src/assets/onePiece-Characters/roger.webp",
  ];
  let sabo = ["Sabo", "src/assets/onePiece-Characters/sabo.webp"];
  let sanji = ["Black leg Sanji", "src/assets/onePiece-Characters/sanji.webp"];
  let shanks = [
    "Red haired Shanks",
    "src/assets/onePiece-Characters/shanks.webp",
  ];
  let zoro = ["Pirate Hunter", "src/assets/onePiece-Characters/zoro.webp"];

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
  let hinata = ['Hyuga Hinata', 'src/assets/naruto-characters/hinata.jpg'];
  let itachi = ['Uchiha Itachi', 'src/assets/naruto-characters/itachi.jpg'];
  let jiraiya = ['Jiraiya', 'src/assets/naruto-characters/jiraiya.jpg'];
  let kakashi = ['Hatake Kakashi', 'src/assets/naruto-characters/kakashi.jpg']
  let madara = ['Uchiha Madara', 'src/assets/naruto-characters/madara.jpg']
  let naruto = ['Uzumaki Naruto', 'src/assets/naruto-characters/naruto.jpg']
  let neji = ['Hyuga Neji', 'src/assets/naruto-characters/neji.jpg'];
  let obito = ['Uchiha Obito', 'src/assets/naruto-characters/obito.jpg'];
  let pain = ['Pain', 'src/assets/naruto-characters/pain.jpg'];
  let lee = ['Rock Lee', 'src/assets/naruto-characters/rockLee.jpg'];
  let sakura = ['Haruno Sakura', 'src/assets/naruto-characters/sakura.jpg'];
  let sasuke = ['Uchiha Sasuke', 'src/assets/naruto-characters/sasuke.jpg'];
  let shikamaru = ['Nara Shikamaru', 'src/assets/naruto-characters/shikamaru.jpg'];
  let tsunade = ['Senju Tsunade', 'src/assets/naruto-characters/tsunade.jpg']

  let narutoList = [];
  narutoList.push(hinata, itachi, jiraiya, kakashi, madara, neji, naruto, obito, pain, lee, sakura, sasuke, shikamaru, tsunade)

  //  Dragon Ball characters variable assignment and array populating
  let android17 = ['Android 17', 'src/assets/dragonBall-characters/android17.jpg'];
  let bardock = ['Bardock', 'src/assets/dragonBall-characters/bardock.jpg'];
  let broly = ['Broly', 'src/assets/dragonBall-characters/broly.jpg']
  let frieza = ['Frieza', 'src/assets/dragonBall-characters/frieza.jpg'];
  let gohan = ['Gohan', 'src/assets/dragonBall-characters/gohan.jpg'];
  let Goku = ['Goku', 'src/assets/dragonBall-characters/goku.jpg'];
  let majinBuu = ['Majin Buu', 'src/assets/dragonBall-characters/majinBuu.jpg'];
  let roshi = ['Master Roshi', 'src/assets/dragonBall-characters/roshi.jpg'];
  let trunks = ['Future Trunks', 'src/assets/dragonBall-characters/trunks.jpg'];
  let vegeta = ['Vegeta', 'src/assets/dragonBall-characters/vegeta.jpg']

  let dragonBallList = [];
  dragonBallList.push(android17, bardock, broly, frieza, gohan, Goku, majinBuu, roshi, trunks, vegeta)

  useEffect(() => {
    highScore < score ? setHighScore(score) : {}
  },[score])

  return (
    <>
      <div id="gameSection">
        <div className="heading topLeftContainer"><img src={themeLogo} alt="" className="headingName" width={300 + 'px'} height={100 + 'px'} /></div>
        <div className="topRightContainer scoreboardContainer">
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
