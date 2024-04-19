import Card from "../components/Card.tsx";
import Banner from "../components/Banner.tsx";

// composant fonctionnel React
const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Banner
        imageSrc="../../public/Banner.jpg"
        imageAlt="Vue de la page d'accueil"
      >
        Chez vous, partout et ailleurs
      </Banner>
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default HomePage;
