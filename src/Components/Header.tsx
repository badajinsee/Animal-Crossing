import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header w-auto h-auto mb-4 ">
        <Link to="/">
          <div className="leftHeader flex bg-headerColor">
            <img
              className="Logo m-7 p-0 w-18 h-24"
              src={process.env.PUBLIC_URL + "/images/레이니_배경삭제.png"}
              alt="rainyday_logo"
            />
            <div>
              <h2 className="text-center text-5xl py-10 text-white ">
                레이니데이
              </h2>
            </div>
          </div>
        </Link>
        <span
          onClick={() =>
            window.open("https://github.com/badajinsee/Animal-Crossing")
          }
          className="ml-4 text-green-500 hover:text-black"
        >
          Created by Sunjin
        </span>
      </div>

      <div className="flex justify-center">
        <div className="MenuBar bg-menuColor gap-3 text-3xl my-3 flex justify-center text-white py-3 rounded-3xl w-1/2 max-sm:h-12 max-sm:text-sm max-sm:px-1">
          <div className="hover:text-black">
            <Link to="/">홈</Link>
          </div>
          <div className="hover:text-black">
            <Link to="/Furniture">가구</Link>
          </div>
          <div className="hover:text-black">
            <Link to="/Encyclopedia">도감</Link>
          </div>
          <div className="hover:text-black">
            <Link to="/Acc">기타사이트</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
