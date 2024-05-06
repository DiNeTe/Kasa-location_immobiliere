import { ReactNode } from "react";

type BannerProps = {
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
  className?: string;
};
// composant fonctionnel React
const Banner: React.FC<BannerProps> = ({
  imageSrc,
  imageAlt,
  children,
  className,
}) => {
  const quote = children && (
    <blockquote className="quote">{children}</blockquote>
  );

  return (
    <h1 className={`banner ${className || ""}`}>
      {quote}
      <img className="banner-image" src={imageSrc} alt={imageAlt} />
    </h1>
  );
};

export default Banner;
