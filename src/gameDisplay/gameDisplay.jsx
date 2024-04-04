/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./gameDisplay.css";
import EasyMode from "../gameModes/easyMode";

export default function DisplayGameSection({ themeName, gameDifficulty }) {
  const [gifs, setGifs] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false)


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

  let nami = ["Cat burglar Nami", "src/assets/onePiece-Characters/nami.webp"];
  let whitebeard = [
    'Whitebeard',
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
  let sabo = [
    "Sabo",
    "src/assets/onePiece-Characters/sabo.webp",
  ];
  let sanji = ["Black leg Sanji", "src/assets/onePiece-Characters/sanji.webp"];
  let shanks = [
    "Red haired Shanks",
    "src/assets/onePiece-Characters/shanks.webp",
  ];
  let zoro = ["Pirate Hunter", "src/assets/onePiece-Characters/zoro.webp"];

  let onePieceList = [];
  onePieceList.push(nami, whitebeard, luffy, ace, brook, jinbe, law, robin, roger, sabo, sanji, shanks, zoro);

  return (
    <>
      <div id="gameSection">
        <div className="heading topLeftContainer">{themeName}</div>
        <div className="topRightContainer scoreboardContainer">
          <div className="scoreCard"></div>
          <div className="bestScoreCard"></div>
        </div>
        <EasyMode onePieceList={onePieceList} score={score} setScore={setScore} gameOver={gameOver} setGameOver={setGameOver} gameDifficulty={gameDifficulty} />
      </div>
    </>
  );
}
