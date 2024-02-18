import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header w-auto h-auto mb-4 ">
        <Link to="/">
          <div className="leftHeader flex bg-headerColor   ">
            <img
              className="Logo m-7 p-0 w-18 h-24"
              src={process.env.PUBLIC_URL + "/images/레이니_배경삭제.png"}
              alt=""
            />
            <h2 className="text-center text-5xl py-10 text-white ">
              레이니데이
            </h2>
          </div>
        </Link>
      </div>

      <div className="flex justify-center">
        <div className="MenuBar bg-menuColor gap-3 text-3xl my-3 flex justify-center text-white py-3 rounded-3xl w-1/2 ">
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
