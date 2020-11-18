## Live demo

You can check a live demo without having to clone/install [here](https://conference-bingo.vercel.app/).

## Available Scripts

After you clone the project, you need to install the dependencies

### `npm install`

After that, you can run it in development mode with

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Installed packages

- sass. To use .scss files.
- prettier. My code formatter of choice.
- confetti.js - I believe it was the easiest, cleanest way to show a bingo animation.
- react-device-detect - I didn't need for the base 5x5 grid, but when I decided to also put an option to have a 3x3 game, I needed 4 different configurations for the grid, so this was my easiest option.

I thought about using Redux or Router, but I thought I wasn't needed for this project.

## Conclusions

Overall, it was a fun project to do, the algorithms to check the bingo were the trickiest part but it was really fulfilling when I got them working. Also, I thought it would be nice to have a way of playing the game in a 3x3 grid, this complicated the algorithms a little bit but I enjoyed the challenge, and it would be very easy to just add any other grid size now.
