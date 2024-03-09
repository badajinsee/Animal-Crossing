import React, { useState } from 'react';

const Flower = () => {
  const [colors, setColors] = useState<string[]>([]);

  const handleColorClick = (newColor: string) => {
    // 색상이 2개 선택되었을 경우, 새로운 색상을 추가하지 않고 기존 색상을 대체
    if (colors.length === 2) {
      setColors([colors[1], newColor]);
    } else {
      setColors((prevColors) => [...prevColors, newColor]);
    }
  };

  const flowerColor = (colors: string[]): string => {
    // includes를 사용하여 순서에 관계없이 색상 조합 확인
    const hasRed = colors.includes('red');
    const hasYellow = colors.includes('yellow');
    const hasBlue = colors.includes('blue');

    if (hasRed && hasYellow) {
      return 'green'; // 빨강색과 노란색을 눌렀을 경우
    } else if (hasRed && hasBlue) {
      return 'purple'; // 빨강색과 파란색을 눌렀을 경우
    }

    return 'none'; // 조건에 맞는 색상이 없을 경우
  };

  return (
    <div>
      <div>
        <button className="border" onClick={() => handleColorClick('red')}>red</button>
        <button className="border" onClick={() => handleColorClick('yellow')}>yellow</button>
        <button className="border" onClick={() => handleColorClick('blue')}>blue</button>
      </div>
      <div>
        Resulting color: {colors.length >= 2 ? flowerColor(colors) : 'Choose two colors'}
      </div>
    </div>
  );
};

export default Flower;
