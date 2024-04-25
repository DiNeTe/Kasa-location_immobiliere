import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import LoadData from "../data/LoadData.tsx";
import { dataType } from "../data/Types";

import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import RatingStars from "../components/Rating";
import SlideShow from "../components/SlideShow";

// composant fonctionnel pour la page detail de l'hébèrgement
const accomodationPage = () => {
  // Récupère l'ID de l'hébergement
  const { id } = useParams<{ id: string }>();
  // Déclare un état pour stocker l'hébergement trouvé et un état pour le chargement
  const [listings, setlistings] = useState<dataType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // Attend la résolution de la promesse pour obtenir les données
        const dataInterface = await LoadData();
        // Cherche l'hébergement correspondant à l'ID recuperé avec useParams
        const foundAccommodation = dataInterface.find(
          (listing) => listing.id === id
        );
        if (foundAccommodation) {
          // met à jour l'état avec les données de l'hébergement
          setlistings(foundAccommodation);
        } else {
          // Sinon, réinitialise l'état de l'hébergement
          setlistings(null);
        }
      } catch (error) {
        console.error("erreur de recupération des données:", error);
        // Réinitialise l'état de l'hébergement en cas d'erreur
        setlistings(null);
        // Assure que l'indicateur de chargement est désactivé après le traitement
      } finally {
        setLoading(false);
      }
    })();
    // Exécute l'effet quand l'ID change
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!listings) {
    return <Navigate to="/not-found" replace />;
  }

  const hostFullName = listings.host.name.split(" ");
  const firstName = hostFullName[0];
  const lastName = hostFullName.slice(1).join(" ");

  // Rendu principal du composant
  return (
    <div className="acommodation-page">
      <SlideShow images={listings.pictures} />
      <section className="accommodation-summary">
        <section className="accommadation-info">
          <div className="name">
            <span>{listings.title}</span>
          </div>
          <div className="location">
            <span>{listings.location}</span>
          </div>
          <div className="tag-section">
            {listings.tags.map((tag, index) => (
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
              src={listings.host.picture}
              alt={`Photo de ${listings.host.name}`}
            />
          </div>
          <div className="rating">
            <RatingStars rating={listings.rating} />
          </div>
        </section>
      </section>
      <section className="collapse-section">
        <Collapse title="Description" className="collapse-description">
          {listings.description}
        </Collapse>
        <Collapse title="Equipements" className="collapse-equipments">
          <ul className="equipments">
            {listings.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </div>
  );
};

export default accomodationPage;
