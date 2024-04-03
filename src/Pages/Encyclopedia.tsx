import { creatures } from "animal-crossing";
import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface Creature {
  name: string;
  iconImage: string;
  translations: {
    kRko: string;
  };
  hemispheres: {
    north: {
      time: string[];
      months: string[];
    };
  };
  sell: number;
  size: string;
  whereHow?: string;
}

// 필요한 속성들을 모두 포함하는 SimpleCreature 타입 정의
type SimpleCreature = Pick<
  Creature,
  | "name"
  | "iconImage"
  | "translations"
  | "hemispheres"
  | "sell"
  | "size"
  | "whereHow"
>;

const Encyclopedia = () => {
  // 물고기, 곤충, 해산물 select state
  const [selected, setSelected] = useState("fish");

  // day select state
  const [daySelected, setDaySelected] = useState("All");

  // 모달 state
  const [modalIsOpen, setIsOpen] = useState(false);

  // 모달 선택된 생물의 상태
  const [selectedCreature, setSelectedCreature] = useState<Creature | null>(
    null
  );

  function openModal(creature: SimpleCreature) {
    // 모달을 열 때 선택된 생물의 정보 저장
    setSelectedCreature(creature);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    // 모달을 닫을 때 선택된 생물의 상태 초기화
    setSelectedCreature(null);
  }

  // 물고기, 곤충, 해산물 selectoption
  const selectOptions = [
    { value: "fish", name: "물고기" },
    { value: "insects", name: "곤충" },
    { value: "seaCreatures", name: "해산물" },
  ];

  // 물고기, 곤충, 해산물 handle
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  // day selectoption
  const daySelectOption = [
    { value: "All", name: "전체" },
    { value: "january", name: "1월" },
    { value: "february", name: "2월" },
    { value: "march", name: "3월" },
    { value: "april", name: "4월" },
    { value: "may", name: "5월" },
    { value: "june", name: "6월" },
    { value: "july", name: "7월" },
    { value: "august", name: "8월" },
    { value: "september", name: "9월" },
    { value: "october", name: "10월" },
    { value: "november", name: "11월" },
    { value: "december", name: "12월" },
  ];

  // day select handle
  const handleDaySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDaySelected(e.target.value);
  };

  // 선택 월 해당 생물 필터링
  const filterCreatures = creatures.filter((creature) => {
    const monthIndex = daySelectOption.findIndex(
      (item) => item.value === daySelected
    );

    if (daySelected === "All") {
      if (selected === "fish") {
        return creature.sourceSheet === "Fish";
      } else if (selected === "insects") {
        return creature.sourceSheet === "Insects";
      } else if (selected === "seaCreatures") {
        return creature.sourceSheet === "Sea Creatures";
      } else {
        return true;
      }
    }

    if (selected === "fish" && creature.sourceSheet === "Fish") {
      return creature.hemispheres.north.monthsArray.includes(monthIndex);
    } else if (selected === "insects" && creature.sourceSheet === "Insects") {
      return creature.hemispheres.north.monthsArray.includes(monthIndex);
    } else if (
      selected === "seaCreatures" &&
      creature.sourceSheet === "Sea Creatures"
    ) {
      return creature.hemispheres.north.monthsArray.includes(monthIndex);
    }
  });

  return (
    <div>
      <div className="flex">
        <select
          onChange={handleSelect}
          value={selected}
          className="  block py-2.5 px-0 text-md bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          {selectOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <select
          onChange={handleDaySelect}
          value={daySelected}
          className="block py-2.5 px-0 text-md bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          {daySelectOption.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-2">총 개수: {filterCreatures.length}</div>

      <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 text-center">
        {filterCreatures.map((creature, index) => (
          <div
            key={index}
            onClick={() => {
              openModal(creature);
            }}
          >
            <div className="flex flex-col border rounded-lg p-3">
              <img className="border-b-2" src={creature?.iconImage} alt="" />
              <span className="break-all overflow-hidden text-ellipsis whitespace-nowrap">
                {creature.translations.kRko}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedCreature && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customStyles}
        >
          <div className="flex flex-col justify-center text-center items-center p-16">
            <div>
              <span className="text-2xl break-words">
                {selectedCreature.translations.kRko}
              </span>
              <img
                src={selectedCreature.iconImage}
                alt={selectedCreature.translations.kRko + `img`}
              />
            </div>

            <div className="flex flex-wrap justify-center">
              <div className="flex flex-col text-xl mr-7">
                <div className="flex flex-wrap">
                  {selectedCreature.whereHow && (
                    <>
                      <span className="text-xl text-slate-500 mb-1 mr-3">
                        장소:
                      </span>
                      <span className="text-xl mb-1">
                        {selectedCreature.whereHow}
                      </span>
                    </>
                  )}
                </div>

                <div className="flex flex-wrap">
                  {selectedCreature.hemispheres.north.time && (
                    <>
                      <span className="text-xl text-slate-500 mb-2 mr-3">
                        시간:
                      </span>
                      <span className="text-xl mb-1">
                        {selectedCreature.hemispheres.north.time}
                      </span>
                    </>
                  )}
                </div>

                <div className="flex flex-wrap">
                  {selectedCreature.hemispheres.north.months && (
                    <>
                      <span className="text-xl text-slate-500 mb-2 mr-3">
                        시기:
                      </span>
                      <span className="text-xl mb-2">
                        {selectedCreature.hemispheres.north.months}
                      </span>
                    </>
                  )}
                </div>

                <div className="flex flex-wrap">
                  {selectedCreature.sell && (
                    <>
                      <span className="text-xl text-slate-500 mb-2 mr-3">
                        가격:
                      </span>
                      <span className="text-xl mb-2">
                        {selectedCreature.sell} 벨
                      </span>
                    </>
                  )}
                </div>

                <div className="flex flex-wrap">
                  {selectedCreature.size && (
                    <>
                      <span className="text-xl text-slate-500 mb-2 mr-3">
                        크기:
                      </span>
                      <span className="text-xl mb-2">
                        {selectedCreature.size}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Encyclopedia;
