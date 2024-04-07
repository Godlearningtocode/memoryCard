import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function EasyMode({
  onePieceList,
  narutoList,
  dragonBallList,
  score,
  setScore,
  gameOver,
  setGameOver,
  gameDifficulty,
  setGameDifficulty,
  themeName
}) {
  const [shuffledThemeList, setShuffledThemeList] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
let cardsTheme = onePieceList
  console.log(cardsTheme, themeName)

  function CardThemeArray() {
if(themeName === 'One Piece') {
cardsTheme = onePieceList
} else if (themeName === 'Naruto') {
  cardsTheme = narutoList
} else if(themeName === 'Dragon Ball') {
  cardsTheme = dragonBallList
} else {
  alert('Something went wrong with character card theme...')
}
  }

  function ShuffleArray(array) {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  function ShuffleCards() {
    CardThemeArray()
    console.log(cardsTheme)
    let shuffledList;
    let shuffled = ShuffleArray(cardsTheme);

    console.log(shuffled)

    if (clickedCards.length > 0) {
      shuffled = shuffled.filter(
        (card) =>
          !clickedCards.some((clickedCard) => clickedCard[0] === card[0])
      );

      let selectedClickedCard = () => {
        return clickedCards[Math.floor(Math.random() * clickedCards.length)];
      };

      gameDifficulty === "easy"
        ? (shuffledList = [shuffled[0], shuffled[1], selectedClickedCard()])
        : gameDifficulty === "medium"
        ? (shuffledList = [
            shuffled[0],
            shuffled[1],
            shuffled[2],
            selectedClickedCard(),
          ])
        : gameDifficulty === "hard"
        ? (shuffledList = [
            shuffled[0],
            shuffled[1],
            shuffled[2],
            shuffled[3],
            selectedClickedCard(),
          ])
        : alert("Error: Something went wrong please refresh...");

      ShuffleArray(shuffledList);
    } else {
      console.log(shuffled[0], shuffled[1], shuffled[2], shuffled)
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
        console.log(shuffledList)
    }

    setShuffledThemeList(shuffledList);
  }

  useEffect(() => {
    ShuffleCards();
  }, [score]);

  function handleCardClick(Element) {
    setClickedCards((prevClicked) => [...prevClicked, Element]);
    setScore((prevScore) => prevScore + 1);
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
            Congratulations, You have won the game.
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
      {gameDifficulty !== false && score < 5 ? (
        <div className="gameCardsContainer">
          {shuffledThemeList.map((Element, index) => {
            console.log(shuffledThemeList)
            return (
              <div
                key={index}
                className="characterCard"
                data-value={[Element]}
                onClick={() => handleCardClick(Element)}
              >
                <img src={Element[1]} className="characterImage" alt="" />
                <div className="characterHeading">{Element[0]}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <HandleGameOver />
      )}
    </>
  );
}
