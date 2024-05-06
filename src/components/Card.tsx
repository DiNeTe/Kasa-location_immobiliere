import { Link } from "react-router-dom";
import React, { MouseEventHandler } from "react";
import { Accommodation } from "../data/Accomodation";

type CardProps = {
  data: Accommodation;
  onClick: MouseEventHandler<HTMLDivElement>;
};

const Card: React.FC<CardProps> = ({ data, onClick }) => {
  return (
    <div className="cards" onClick={onClick}>
      <Link to={`/Accommodation/${data.id}`}>
        <img src={data.cover} alt={`Image de l'hébèrgement : ${data.title}`} />
        <h2 className="title-card">{data.title}</h2>
      </Link>
    </div>
  );
};

export default Card;
