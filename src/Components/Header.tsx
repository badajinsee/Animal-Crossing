import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header h-24 w-full mt-10 mb-40 ">
        <Link to="/">
          <div className="leftHeader flex bg-headerColor   ">
            <img
              className="Logo m-7 px-8 w-40 h-40"
              src={process.env.PUBLIC_URL + "/images/레이니_배경삭제.png"}
              alt=""
            />
            <h2 className="text-center text-6xl py-20 text-white ">
              레이니데이
            </h2>
          </div>
        </Link>
      </div>

      <div className="flex justify-center">
        <div className="MenuBar bg-menuColor gap-3 text-4xl my-3 flex justify-center text-white py-3 rounded-3xl w-96 ">
          <div>
            <Link to="/">홈</Link>
          </div>
          <div>
            <Link to="/Furniture">가구</Link>
          </div>
          <div>
            <Link to="/Flower">꽃교배</Link>
          </div>
          <div>
            <Link to="/Acc">기타사이트</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
