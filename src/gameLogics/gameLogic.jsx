/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import Tilt from "react-parallax-tilt";

/* eslint-disable react/prop-types */
export default function EasyMode({
  onePieceList,
  narutoList,
  dragonBallList,
  score,
  setScore,
  gameDifficulty,
  setGameDifficulty,
  themeName,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [lostGame, setLostGame] = useState(false);
  const [shuffledThemeList, setShuffledThemeList] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [cardBackside, setCardBackside] = useState(
    "public/onePiece-cardBackside.jpg"
  );
  let cardsTheme = onePieceList;

  const flipCard = () => setIsFlipped(!isFlipped);

  function CardThemeArray() {
    if (themeName === "One Piece") {
      cardsTheme = onePieceList;
      setCardBackside("public/onePiece-cardBackside.jpg");
    } else if (themeName === "Naruto") {
      cardsTheme = narutoList;
      setCardBackside("public/naruto-cardBackside.jpg");
    } else if (themeName === "Dragon Ball") {
      cardsTheme = dragonBallList;
      setCardBackside("public/dragonball-cardBackside.jpg");
    } else {
      alert("Something went wrong with character card theme...");
    }
  }

  function ShuffleArray(array) {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  function ShuffleCards() {
    CardThemeArray();
    let shuffledList;
    let shuffled = ShuffleArray(cardsTheme);

    if (clickedCards.length > 0) {
      shuffled = shuffled.filter(
        (card) =>
          !clickedCards.some((clickedCard) => clickedCard[0] === card[0])
      );

      let selectedClickedCard = () => {
        return clickedCards[Math.floor(Math.random() * clickedCards.length)];
      };

      gameDifficulty === "easy"
        ? (shuffledList = ShuffleArray([
            shuffled[0],
            shuffled[1],
            selectedClickedCard(),
          ]))
        : gameDifficulty === "medium"
        ? (shuffledList = ShuffleArray([
            shuffled[0],
            shuffled[1],
            shuffled[2],
            selectedClickedCard(),
          ]))
        : gameDifficulty === "hard"
        ? (shuffledList = ShuffleArray([
            shuffled[0],
            shuffled[1],
            shuffled[2],
            shuffled[3],
            selectedClickedCard(),
          ]))
        : alert("Error: Something went wrong please refresh...");
    } else {
      gameDifficulty === "easy"
        ? (shuffledList = [shuffled[0], shuffled[1], shuffled[2]])
        : gameDifficulty === "medium"
        ? (shuffledList = [shuffled[0], shuffled[1], shuffled[2], shuffled[3]])
        : gameDifficulty === "hard"
        ? (shuffledList = [
            shuffled[0],
            shuffled[1],
            shuffled[2],
            shuffled[3],
            shuffled[4],
          ])
        : alert("Error: Something went wrong please refresh...");
    }

    setShuffledThemeList(shuffledList);
  }

  useEffect(() => {
    ShuffleCards();
  }, [score]);

  function handleCardClick(Element) {
    flipCard();
    for (let i = 0; i < clickedCards.length; i++) {
      if (clickedCards[i][0] === Element[0]) {
        setLostGame(true);
      }
    }
    setClickedCards((prevClicked) => [...prevClicked, Element]);
    setScore((prevScore) => prevScore + 1);

    setTimeout(() => {
      setIsFlipped(false);
    }, 800);
  }

  function HandlePlayAgainClick() {
    setClickedCards([]);
    setScore(0);
    setGameDifficulty(false);
  }

  function HandleGameOver() {
    return (
      <>
        <div className="gameOverContainer">
          <div className="gameOverHeading">
            {lostGame === false && "Congratulations, You have won the game."}
            {lostGame === true &&
              "You Clicked on a previously clicked Character. You lose..."}
          </div>
          <div className="gameOverButtons">
            <button className="playAgain" onClick={HandlePlayAgainClick}>
              Play Again
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {gameDifficulty !== false && score < 5 && lostGame === false ? (
        <div className="gameCardsContainer">
          {shuffledThemeList.map((Element, index) => {
            return (
              <Tilt key={index}>
                <ReactCardFlip
                  isFlipped={isFlipped}
                  flipDirection="horizontal"
                >
                  <div
                    className="characterCard"
                    data-value={[Element]}
                    onClick={() => handleCardClick(Element)}
                  >
                    <img src={Element[1]} className="characterImage" alt="" />
                    <div className="characterHeading">{Element[0]}</div>
                  </div>
                  <div className="cardBackSide characterCard">
                    <img src={cardBackside} className="" alt="" />
                  </div>
                </ReactCardFlip>
              </Tilt>
            );
          })}
        </div>
      ) : (
        <HandleGameOver />
      )}
    </>
  );
}
