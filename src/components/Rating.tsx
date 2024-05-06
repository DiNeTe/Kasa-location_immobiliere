type RatingProps = {
  rating: string;
};

const RatingStars: React.FC<RatingProps> = ({ rating }) => {
  // Converti la note en nombre
  const ratingNumber = Number(rating);
  // Crée un tableau pour les étoiles pleines, basé sur la note
  const fullStars = Array(ratingNumber).fill("★");
  // Crée un tableau pour les étoiles vides, basé sur la différence entre la note et la note maximale
  const emptyStars = Array(5 - ratingNumber).fill("☆");
  return (
    <div className="rating">
      {fullStars.map((star, index) => (
        <span key={`full-${index}`} className="full-star">
          {star}
        </span>
      ))}
      {emptyStars.map((star, index) => (
        <span key={`empty-${index}`} className="empty-star">
          {star}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
