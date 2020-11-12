import './Board.scss';

import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const Board = () => {
  const [data, setData] = useState([
    { id: uuid(), text: '(child noises in the background)', active: false },
    { id: uuid(), text: 'Hello, hello?', active: false },
    { id: uuid(), text: 'i need to jump in another call', active: false },
    { id: uuid(), text: 'can everyone go on mute', active: false },
    {
      id: uuid(),
      text: 'could you please get closer to the mic',
      active: false,
    },
    { id: uuid(), text: '(loud painful echo / feedback)', active: false },
    { id: uuid(), text: 'Next slide, please.', active: false },
    { id: uuid(), text: 'can we take this offline?', active: false },
    { id: uuid(), text: 'is ___ on the call?', active: false },
    {
      id: uuid(),
      text: 'Could you share this slides afterwards?',
      active: false,
    },
    { id: uuid(), text: 'can somebody grant presenter rights?', active: false },
    { id: uuid(), text: 'can you email that to everyone?', active: false },
    { id: uuid(), text: 'CONF CALL BINGO', active: true },
    { id: uuid(), text: 'sorry, i had problems logging in', active: false },
    { id: uuid(), text: '(animal noises in the background)', active: false },
    {
      id: uuid(),
      text: "sorry, i didn't found the conference id",
      active: false,
    },
    { id: uuid(), text: 'i was having connection issues', active: false },
    { id: uuid(), text: "i'll have to get back to you", active: false },
    { id: uuid(), text: 'who just joined?', active: false },
    {
      id: uuid(),
      text: 'sorry, something ___ with my calendar',
      active: false,
    },
    { id: uuid(), text: 'do you see my screen?', active: false },
    { id: uuid(), text: "let's wait for ___!", active: false },
    { id: uuid(), text: 'You will send the minutes?', active: false },
    { id: uuid(), text: 'sorry, i was on mute', active: false },
    { id: uuid(), text: 'can you repeate, please?', active: false },
  ]);
  const [indices, setIndices] = useState([12]);
  const [bingos, setBingos] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (id, index) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item,
      ),
    );

    if (indices.includes(index)) {
      setIndices(() =>
        indices.filter((i) => i !== index).sort((a, b) => a - b),
      );
    } else {
      setIndices(() => [...indices, index].sort((a, b) => a - b));
    }

    setCurrentIndex(index);
  };

  useEffect(() => {
    checkBingo(currentIndex);
  }, [currentIndex]);

  const checkBingo = (index) => {
    const limit = 5;
    // Possible bingos
    // 0 - 1 - 2 - 3 - 4 - row
    // 0 - 5 - 10 - 15 - 20 - column
    // 0 - 6 - 12 - 18 - 24 - diagonal A
    // 4 - 8 - 12 - 16 - 20 - diagonal B

    // Row
    const checkRow = () => {
      const startNum = Math.floor(index / limit) * limit;
      for (let i = startNum; i < startNum + limit; i++) {
        if (!indices.includes(i)) return false;
      }
      setBingos(bingos + 1);
      return true;
    };
    console.log(checkRow());

    // Column
    if (index < limit) {
    }
    const checkColumn = () => {
      const startNum = index % 5;
      for (
        let i = startNum;
        i < startNum + limit * (limit - 1) + 1;
        i += limit
      ) {
        console.log(startNum);
        console.log(startNum + limit * (limit - 1));
        if (!indices.includes(i)) return false;
      }
      setBingos(bingos + 1);
      return true;
    };
    console.log(checkColumn());

    // Diagonal A
    if (index === 0) {
    }

    // Diagonal B
    if (index === limit - 1) {
    }
  };

  return (
    <div className="Board">
      <div className="Board-wrapper">
        {data.map((item, index) => (
          <div
            className={`box ${item.active && 'active'}`}
            key={item.id}
            onClick={() => handleClick(item.id, index)}
          >
            {index} {/* {item.text} */}
          </div>
        ))}
        {bingos && <div>bingos: {bingos}</div>}
      </div>
    </div>
  );
};

export default Board;
