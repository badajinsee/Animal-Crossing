import { Link } from "react-router-dom";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer w-full bg-headerColor flex justify-center sticky bottom-0 items-center">
      <div className="container mx-32 max-sm:mx-0">
        <Link to="/" className="flex justify-center">
          <img
            className="w-20 h-24 max-sm:w-16 max-sm:h-16 hover:opacity-30"
            src={process.env.PUBLIC_URL + "/images/나뭇잎_배경삭제.png"}
            alt=""
            onClick={handleScrollTop}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
