import type { PlayingCard } from "../../types/PlayingCard";
import "./Card.css";

type CardProps = {
  card: PlayingCard;
};

const suitSymbols = {
  hearts: "♥",
  diamonds: "♦",
  clubs: "♣",
  spades: "♠",
};

function Card({ card }: CardProps) {
  const isRedSuit = card.suit === "hearts" || card.suit === "diamonds";

  return (
    <div className={`playing-card ${isRedSuit? "red": "black"}`}>
      <span className="card-value">{card.value}</span>
      <span className="card-suit">{suitSymbols[card.suit]}</span>
    </div>
  );
}

export default Card;
