import { Link } from "react-router-dom";
import React, { MouseEventHandler } from "react";

type CardProps = {
  id: string;
  title: string;
  cover: string;
  imageAlt?: string;

  onClick: MouseEventHandler<HTMLDivElement>;
};

const Card: React.FC<CardProps> = ({ id, title, cover, imageAlt, onClick }) => {
  return (
    <div className="cards" onClick={onClick}>
      <Link to={`/Accommodation/${id}`}>
        <img src={cover} alt={imageAlt} />
        <h2 className="title-card">{title}</h2>
      </Link>
    </div>
  );
};

export default Card;
