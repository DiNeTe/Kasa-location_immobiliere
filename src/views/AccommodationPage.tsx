import { useParams, Navigate } from "react-router-dom";

import listings from "../data/listings.json";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import RatingStars from "../components/Rating";
import SlideShow from "../components/SlideShow";

const AccommodationSheet = () => {
  const { id } = useParams();
  const accommodation = listings.find((listing) => listing.id === id);

  const hostFullName = accommodation?.host.name.split(" ");
  const firstName = hostFullName?.[0];
  const lastName = hostFullName?.slice(1).join(" ");

  return (
    <div className="acommodation-page">
      {accommodation ? (
        <>
          <SlideShow images={accommodation.pictures} />
          <section className="accommodation-summary">
            <section className="accommadation-info">
              <div className="name">
                <span>{accommodation.title}</span>
              </div>
              <div className="location">
                <span>{accommodation.location}</span>
              </div>
              <div className="tag-section">
                {accommodation.tags.map((tag, index) => (
                  <Tag key={index} tags={tag} />
                ))}
              </div>
            </section>

            <section className="profile-card">
              <div className="profile-info">
                <div className="fullname">
                <span className="first-name">{firstName}</span>
                <span className="last-name">{lastName}</span>
                </div>
                <img
                  src={accommodation.host.picture}
                  alt={`Picture of ${accommodation.host.name}`}
                />
              </div>
              <div className="rating">
                <RatingStars rating={accommodation.rating} />
              </div>
            </section>
          </section>
          <section className="collapse-section">
            <Collapse title="Description" className="collapse-description">
              {accommodation.description}
            </Collapse>
            <Collapse title="Equipements" className="collapse-equipments">
              <ul className="equipments">
                {accommodation.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </section>
        </>
      ) : (
        <Navigate to="/not-found"/>
      )}
    </div>
  );
};

export default AccommodationSheet;
