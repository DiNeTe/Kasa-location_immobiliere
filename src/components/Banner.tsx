import { ReactNode } from "react";
import "../sass/banner.scss";

type BannerProps = {
  imageSrc: string;
  imageAlt: string;
  children ?: ReactNode;
}
// composant fonctionnel React
const Banner: React.FC<BannerProps> = ({ imageSrc, imageAlt, children }) => {
  return (
    <div className="banner">
      <blockquote className="quote">{children}</blockquote>
      <img
        className="banner-image"
        src={imageSrc}
        alt={imageAlt}
      />
    </div>
  );
};

export default Banner;
