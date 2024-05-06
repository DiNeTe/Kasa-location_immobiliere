import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Accommodation } from "../data/Accomodation";

import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import RatingStars from "../components/Rating";
import SlideShow from "../components/SlideShow";
import { useAppDependencies } from "../app/context";

const AccommodationPage: React.FC = () => {
  // hook utilisé pour  obtenir l'id de l'hébergement.
  const { id } = useParams<{ id: string }>();
  // Utilisation des dépendances de l'application pour récupérer les données
  const { accommadationDataSource } = useAppDependencies();
  const [accommodation, setAccommodation] = useState<Accommodation | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      setLoading(true);
      const foundAccommodation = await accommadationDataSource.fetchOne(id!);
      setAccommodation(foundAccommodation);
      setLoading(false);
    }
    init();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!accommodation) {
    return <Navigate to="/not-found" replace />;
  }

  const hostFullName = accommodation.host.name.split(" ");
  const firstName = hostFullName[0];
  const lastName = hostFullName.slice(1).join(" ");

  return (
    <div className="acommodation-page">
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
              <Tag key={index} tag={tag} />
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
              alt={"Photo de ${listing.host.name}"}
            />
          </div>
          <div className="rating">
            <RatingStars rating={accommodation.rating} />
          </div>
        </section>
      </section>
      <section className="collapse-section">
        <Collapse title="Description" className="collapse-description">
          <p className="collapse-content">{accommodation.description}</p>
        </Collapse>
        <Collapse title="Equipements" className="collapse-equipments">
          <ul className="collapse-content">
            {accommodation.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </div>
  );
};

export default AccommodationPage;
