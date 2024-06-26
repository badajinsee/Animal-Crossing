const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer w-full bg-headerColor flex justify-center sticky bottom-0 items-center max-sm:fixed max-sm:min-h-10">
      <div className="container mx-32 max-sm:mx-0">
        <div className="flex justify-center">
          <img
            className="w-20 h-24 max-sm:w-16 max-sm:h-16 hover:opacity-30"
            src={process.env.PUBLIC_URL + "/images/나뭇잎_배경삭제.png"}
            alt=""
            onClick={handleScrollTop}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
