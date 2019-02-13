class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', '.square', e => {
      const $square = $(e.target);
      this.makeMove($square)
    })
  }

  makeMove($square) {
    let $currentPlayer = this.game.currentPlayer
    try {
      this.game.playMove($square.attr('pos'));
    } catch (err) {
      alert("Invalid Position, idiot.")
    }

    // this is referring to the <li></li>
    if ($currentPlayer === "😼") {
      $square.text("😼")
      let $audio = $('#sound1')
      var audio = new Audio($audio.attr('src'));
      audio.play();
    } else { 
      $square.text("🐶")
      let $audio = $('#sound2')
      var audio = new Audio($audio.attr('src'));
      audio.play();
    }

    if (this.game.isOver() && this.game.winner()) {
      let $winner = this.game.winner();
      let $winnerBanner = $('<h1 class="winner"></h1>');
      $winnerBanner.text(`Congratulations! ${$winner} wins!`)
      let $header = $('.winner')
      $header.append($winnerBanner);
    } else if (this.game.isOver()) {
      let $winnerBanner = $('<h1 class="winner"></h1>');
      $winnerBanner.text(`😼 Congratulations! Everyone wins! 🐶`)
      let $header = $('.winner')
      $header.append($winnerBanner);
    }
  }

  setupBoard() {
    const $board = $('<div>');
    this.$el.append($board);
    $board.append('<ul>');
    let $ul = $('ul');
    for (let i = 0; i < 9; i++) {
      let $square = $('<li>');
      $square.addClass('square');
      $square.attr('target', `${i}`);
      let $innerDiv = ('<div class="emoji">');
      let $pos = `${Math.floor(i/3)},${i % 3}`
      $square.attr('pos',$pos);
      $square.append($innerDiv);
      $ul.append($square);
    }
  }
}

module.exports = View;
