const View = require('./ttt-view.js')
const Game = require('./game.js')

  $(() => {
    const rootEL = $('figure')
    let g = new Game();
    new View(g, rootEL);
  });
