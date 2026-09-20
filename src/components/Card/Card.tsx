import type { PlayingCard } from "../../types/PlayingCard";
import "./Card.css";

type CardProps = {
  card: PlayingCard;
  faceDown?: boolean;
};

const suitSymbols = {
  hearts: "♥",
  diamonds: "♦",
  clubs: "♣",
  spades: "♠",
};

function Card({ card, faceDown = false }: CardProps) {
  const isRedSuit = card.suit === "hearts" || card.suit === "diamonds";

  if (faceDown){
    return <div className="playing-card card-back"></div>
  }
  return (
    <div className={`playing-card ${isRedSuit? "red": "black"}`}>
      <span className="card-value">{card.value}</span>
      <span className="card-suit">{suitSymbols[card.suit]}</span>
    </div>
  );
}

export default Card;
