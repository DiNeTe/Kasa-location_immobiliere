import { useNavigate } from "react-router-dom";
import  { useEffect, useState } from "react";

import DataInterface  from "../data/Interface.tsx";
import { dataType } from "../data/Types";

import Card from "../components/Card";
import Banner from "../components/Banner";


// composant fonctionnel React
const HomePage: React.FC = () => {
  // Hook de navigation
  const navigate = useNavigate();
  // Déclare un état pour stocker les listes d'hébergements, initialisé à un tableau vide
  const [listings, setListings] = useState<dataType[]>([]);

  useEffect(() => {
    // Fonction asynchrone pour récupérer les données des hébergements
    async function dataAccommodation() {
      try {
        // Appel à la fonction DataInterface qui doit retourner les données des hébergements
        const dataInterface = await DataInterface();
        // Met à jour l'état listings avec les données récupérées
        setListings(dataInterface);
      } catch (error) {
        console.error("erreur de recupération des données:", error);
      }
    }
    // Appelle la fonction dataAccommodation
    dataAccommodation();
  }, []);

  // Fonction pour gérer le clic sur une carte
  const CardClick = (id: string) => {
    // navigue vers la page de détail de l'hébergement
    navigate(`/accommodation/${id}`);
  };

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
        {listings.map((listing) => (
          <Card
            key={listing.id}
            id={listing.id}
            cover={listing.cover}
            title={listing.title}
            onClick={() => CardClick(listing.id)}
            imageAlt={`Image de l'hébèrgement : ${listing.title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
