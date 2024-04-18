import Card from "../components/Card.tsx";
import Banner from "../components/Banner.tsx";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Banner />
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
