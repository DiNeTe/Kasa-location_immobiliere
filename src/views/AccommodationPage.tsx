import { useParams } from "react-router-dom";
import listings from "../data/listings.json";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import RatingStars from "../components/Rating";

const AccommodationSheet = () => {
  const { id } = useParams();
  const accommodation = listings.find((listing) => listing.id === id);

  return (
    <div className="acommodation-page">
      {accommodation ? (
        <>
          <img
            src={accommodation.cover}
            alt={`Cover for ${accommodation.title}`}
          />
          <span>{accommodation.title}</span>
          <span>{accommodation.location}</span>
          <div className="tag-section">
            {accommodation.tags.map((tag, index) => (
              <Tag key={index} tags={tag} />
            ))}
          </div>
          <div className="host-info">
            <RatingStars rating={accommodation.rating} />
            <span>{accommodation.host.name}</span>
            <img
              src={accommodation.host.picture}
              alt={`Picture of ${accommodation.host.name}`}
            />
          </div>
          <Collapse title="Description">{accommodation.description}</Collapse>
          <Collapse title="Equipements">
            <ul className="equipments">
              {accommodation.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </>
      ) : (
        <p>Hébergement non trouvé.</p>
      )}
    </div>
  );
};

export default AccommodationSheet;
