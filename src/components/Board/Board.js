import './Board.scss';

import ConfettiGenerator from 'confetti-js';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { v4 as uuid } from 'uuid';

const baseData = [
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
  { id: uuid(), text: 'next slide, please.', active: false },
  { id: uuid(), text: 'can we take this offline?', active: false },
  { id: uuid(), text: 'is ___ on the call?', active: false },
  {
    id: uuid(),
    text: 'Could you share this slides afterwards?',
    active: false,
  },
  { id: uuid(), text: 'can somebody grant presenter rights?', active: false },
  { id: uuid(), text: 'can you email that to everyone?', active: false },
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
  { id: uuid(), text: 'will you send the info?', active: false },
  { id: uuid(), text: 'sorry, i was on mute', active: false },
  { id: uuid(), text: 'can you repeat, please?', active: false },
  { id: uuid(), text: 'can you hear me?', active: false },
  { id: uuid(), text: 'could we do this later?', active: false },
  {
    id: uuid(),
    text: '(someone connect and disconnects twice)',
    active: false,
  },
];

const Board = ({ limit }) => {
  const [data, setData] = useState([]);
  const [indices, setIndices] = useState([(limit * limit - 1) / 2]);
  const [bingos, setBingos] = useState(0);
  const [lastIndex, setLastIndex] = useState(null);
  const [gridStyle, setGridSyle] = useState({});

  useEffect(() => {
    let newData = [...baseData];

    const shuffleArray = (arr) =>
      arr
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1]);

    const insert = (arr, index, newItem) => [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index),
    ];

    newData = shuffleArray(newData);
    newData = newData.slice(0, limit * limit - 1);

    newData = insert(newData, (limit * limit) / 2, {
      id: uuid(),
      text: 'CONF CALL 😷 BINGO',
      active: true,
      center: true,
    });

    setData(newData);
  }, [limit]);

  useEffect(() => {
    checkBingo(lastIndex);
  }, [lastIndex]);

  useEffect(() => {
    const confettiSettings = {
      target: 'confetti-holder',
      max: '150',
      size: '2',
      clock: '150',
      start_from_edge: true,
      respawn: false,
    };
    const confetti = new ConfettiGenerator(confettiSettings);

    if (bingos) confetti.render();

    return () => confetti.clear();
  }, [bingos]);

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

    setLastIndex(index);
  };

  const checkBingo = (index) => {
    console.log(data);
    // Row
    const checkRow = () => {
      const startNum = Math.floor(index / limit) * limit;
      for (let i = startNum; i < startNum + limit; i++) {
        if (!indices.includes(i)) return false;
      }
      setBingos(bingos + 1);
      return true;
    };
    checkRow();

    // Column
    const checkColumn = () => {
      const startNum = index % limit;
      for (
        let i = startNum;
        i < startNum + limit * (limit - 1) + 1;
        i += limit
      ) {
        if (!indices.includes(i)) return false;
        console.log(!indices.includes(i));
      }
      setBingos(bingos + 1);
      return true;
    };
    checkColumn();

    // Diagonal A
    const checkDiagonalA = () => {
      const startNum = 0;
      for (let i = startNum; i < limit * limit; i += limit + 1) {
        if (!indices.includes(i)) return false;
      }
      setBingos(bingos + 1);
      return true;
    };
    if (index % (limit + 1) === 0) checkDiagonalA();

    // Diagonal B
    const checkDiagonalB = () => {
      const startNum = limit - 1;
      for (let i = startNum; i < limit * startNum + 1; i += startNum) {
        if (!indices.includes(i)) return false;
      }
      setBingos(bingos + 1);
      return true;
    };
    if (index % (limit - 1) === 0) checkDiagonalB();
  };

  const renderBox = data.map((item, index) => {
    if (item.center) {
      return (
        <div className="box box-center" key={item.id}>
          <div className="circle">{item.text}</div>
        </div>
      );
    } else {
      return (
        <div
          className={`box ${item.active && 'active'}`}
          key={item.id}
          onClick={() => handleClick(item.id, index)}
        >
          {item.text}
        </div>
      );
    }
  });

  useEffect(() => {
    if (isMobile) {
      setGridSyle({
        gridTemplateColumns: `repeat(${limit}, ${limit === 5 ? '18' : '28'}vw)`,
        gridTemplateRows: `repeat(${limit}, ${limit === 5 ? '18' : '28'}vw)`,
      });
    } else {
      setGridSyle({
        gridTemplateColumns: `repeat(${limit}, ${
          limit === 5 ? '8.5' : '15'
        }vw)`,
        gridTemplateRows: `repeat(${limit}, ${limit === 5 ? '8.5' : '15'}vw)`,
      });
    }
  }, [limit]);

  return (
    <div className="Board">
      <div className="Board-wrapper" style={gridStyle}>
        {renderBox}
      </div>
      <canvas id="confetti-holder"></canvas>
    </div>
  );
};

export default Board;
