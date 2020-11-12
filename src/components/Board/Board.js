import './Board.scss';

import { useState } from 'react';
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

  const handleClick = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item,
      ),
    );
  };

  return (
    <div className="Board">
      <div className="Board-wrapper">
        {data.map((item, i) => (
          <div
            className={`box ${item.active && 'active'}`}
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            {/* {i + 1} */} {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
