import "../sass/banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <blockquote className="quote">Chez vous, partout et ailleurs</blockquote>
      <img
        className="banner-image"
        src="../../public/banner.jpg"
        alt="banner"
      />
    </div>
  );
};

export default Banner;
