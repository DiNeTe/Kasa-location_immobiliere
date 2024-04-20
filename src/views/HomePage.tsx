import listings from "../data/listings.json";
import Card from "../components/Card.tsx";
import Banner from "../components/Banner.tsx";
import { useNavigate } from "react-router-dom";

// composant fonctionnel React
const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // Fonction pour gérer le clic sur une carte
  const CardClick = (id: string) => {
    // navigues vers la page de détail de l'hébergement
    navigate(`/accommodation/${id}`);
  };
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
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
