import './Landing.scss';

const Landing = ({ setLimit }) => {
  return (
    <div className="Landing">
      <div class="Landing-box">
        <h1>Welcome to CONF CALL 😷 BINGO!</h1>
        <p>
          Bingo is a game of chance, you will get a random set of phrases and
          you need to complete a row, column or diagonal to win. You can have
          multiple bingos.
        </p>
        <p>
          There's a free slot in the center that it always on, so use it for
          your advantage!
        </p>
        <p>You can play in two ways, 3x3 or 5x5, you decide!</p>
        <div class="Landing-buttons">
          <button
            type="button"
            className="Landing-button"
            onClick={() => setLimit(3)}
          >
            3x3
          </button>
          <button
            type="button"
            className="Landing-button"
            onClick={() => setLimit(5)}
          >
            5x5
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
