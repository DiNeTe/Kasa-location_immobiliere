import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Accommodation } from "../data/Accomodation";

import Card from "../components/Card";
import Banner from "../components/Banner";
import { useAppDependencies } from "../app/context";

// logique du composant fonctionnel React
const HomePage: React.FC = () => {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  // Utilisation des dépendances de l'application pour récupérer les données
  const { accommadationDataSource } = useAppDependencies();
  // Hook de navigation
  const navigate = useNavigate();
  // Fonction pour gérer le clic sur une carte
  const CardClick = (id: string) => {
    // navigue vers la page de détail de l'hébergement
    navigate(`/accommodation/${id}`);
  };

  useEffect(() => {
    async function initPage() {
      const accommodations = await accommadationDataSource.fetchMany();
      setAccommodations(accommodations);
    }

    initPage();
  });

  // Rendu principal du composant
  return (
    <div className="home-page">
      <Banner
        imageSrc="../../public/Banner.jpg"
        imageAlt="Vue de la page d'accueil"
      >
        Chez vous, partout et ailleurs
      </Banner>

      <div className="cards-container">
        {accommodations.map((accommodation: Accommodation) => (
          <Card
            key={accommodation.id}
            data={accommodation}
            onClick={() => CardClick(accommodation.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
