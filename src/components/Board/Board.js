import './Board.scss';

const Board = () => {
  const data = [
    { text: '(child noises in the background)', active: false },
    { text: 'Hello, hello?', active: false },
    { text: 'i need to jump in another call', active: false },
    { text: 'can everyone go on mute', active: false },
    { text: 'could you please get closer to the mic', active: false },
    { text: '(loud painful echo / feedback)', active: false },
    { text: 'Next slide, please.', active: false },
    { text: 'can we take this offline?', active: false },
    { text: 'is ___ on the call?', active: false },
    { text: 'Could you share this slides afterwards?', active: false },
    { text: 'can somebody grant presenter rights?', active: false },
    { text: 'can you email that to everyone?', active: false },
    { text: 'CONF CALL BINGO', active: true },
    { text: 'sorry, i had problems logging in', active: false },
    { text: '(animal noises in the background)', active: false },
    { text: "sorry, i didn't found the conference id", active: false },
    { text: 'i was having connection issues', active: false },
    { text: "i'll have to get back to you", active: false },
    { text: 'who just joined?', active: false },
    { text: 'sorry, something ___ with my calendar', active: false },
    { text: 'do you see my screen?', active: false },
    { text: "let's wait for ___!", active: false },
    { text: 'You will send the minutes?', active: false },
    { text: 'sorry, i was on mute', active: false },
    { text: 'can you repeate, please?', active: false },
  ];

  return (
    <div className="Board">
      {data.map((item, i) => (
        <div className="box">
          {i + 1} {item.text}
        </div>
      ))}
    </div>
  );
};

export default Board;
