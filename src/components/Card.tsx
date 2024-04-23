import { Link } from "react-router-dom";
import React, { MouseEventHandler } from 'react';

type CardProps = {
  id: string;
  title: string;
  cover: string;
  onClick: MouseEventHandler<HTMLDivElement>;
};

const Card: React.FC<CardProps> = ({ id, title, cover, onClick}) => {
  return (
    <div className="cards" onClick={onClick}>
      <Link to={`/Accommodation/${id}`}>
        <img src={cover} alt={title} />
        <h2 className="title-card">{title}</h2>
      </Link>
    </div>
  );
};

export default Card;
