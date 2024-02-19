const Acc = () => {
  // 무주식 클릭시 사이트 이동
  const mustockClick = () => {
    window.open("https://ac-turnip.com/", "_blank");
  };

  // 날씨시드 클릭시 사이트 이동
  const weatherClick = () => {
    window.open("https://wuffs.org/acnh/weather/", "_blank");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-6">
        <div id="무주식 버튼" className="mb-3">
          <button
            type="button"
            onClick={mustockClick}
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
          >
            <div className="flex items-center px-5  ">
              <img
                className="w-12  py-3 "
                src={process.env.PUBLIC_URL + "/images/무파니_배경삭제.png"}
                alt=""
              />
              <div className=" pl-2 py-8 ">무주식 사이트 이동하기</div>
            </div>
          </button>
        </div>

        <div id="날씨시드 버튼">
          <button
            type="button"
            onClick={weatherClick}
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
          >
            <div className="flex items-center">
              <img
                className="w-20  py-3"
                src={process.env.PUBLIC_URL + "/images/여울_배경삭제.png"}
                alt=""
              />
              <div className="py-8 ">날씨시드 사이트 이동하기</div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Acc;
