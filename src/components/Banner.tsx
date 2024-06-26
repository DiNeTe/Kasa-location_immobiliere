import { ReactNode } from "react";

type BannerProps = {
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
};
// composant fonctionnel React
const Banner: React.FC<BannerProps> = ({ imageSrc, imageAlt, children }) => {
  const quote = children && (
    <blockquote className="quote">{children}</blockquote>
  );

  return (
    <div className="banner">
      {quote}
      <img className="banner-image" src={imageSrc} alt={imageAlt} />
    </div>
  );
};

export default Banner;
