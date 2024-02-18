const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="leftHeader flex">
          <img
            className="Loge"
            src={process.env.PUBLIC_URL + "/images/레이니_배경삭제.png"}
            alt=""
          />
          <h2>레이니데이</h2>
        </div>
      </div>

      <div className="MenuBar"></div>
    </>
  );
};

export default Header;
