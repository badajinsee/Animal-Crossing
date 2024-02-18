import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer w-full mt-8 bg-headerColor flex justify-center">
        <Link to="/">
          <img
            className="w-20 h-24"
            src={process.env.PUBLIC_URL + "/images/나뭇잎_배경삭제.png"}
            alt=""
          />
        </Link>
      </div>
    </>
  );
};

export default Footer;
