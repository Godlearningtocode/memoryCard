import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function EasyMode({
  onePieceList,
  score,
  setScore,
  gameOver,
  setGameOver,
  gameDifficulty,
}) {
  const [shuffledOnePieceList, setShuffledOnePieceList] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  function ShuffleArray(array) {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  function ShuffleCards() {
    let shuffledList;
    let shuffled = ShuffleArray(onePieceList);

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

    setShuffledOnePieceList(shuffledList);
  }

  useEffect(() => {
    ShuffleCards();
  }, [score]);

  function handleCardClick(Element) {
    setClickedCards((prevClicked) => [...prevClicked, Element]);
    setScore((prevScore) => prevScore + 1);
    console.log(clickedCards);
  }

  return (
    <>
      <div className="gameCardsContainer">
        {shuffledOnePieceList.map((Element, index) => {
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
    </>
  );
}
