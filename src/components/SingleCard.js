import "./SingleCard.css";

const SingleCard = ({ card }) => {
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img src="/img/cover.png" alt="card back" />
      </div>
    </div>
  );
};

export default SingleCard;
