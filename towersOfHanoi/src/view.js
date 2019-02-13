class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', '.tower', e => {
      const $startTower = $(e.target);
      this.$el.on('click', '.tower', e => {
        const $endTower = $(e.target);
        this.makeMove($startTower, $endTower)
      })
    })

  }

  makeMove($startTower, $endTower) {
    let $startTowerPos = parseInt($startTower.attr('pos')[2])
    let $endTowerPos = parseInt($endTower.attr('pos')[2])
    if (this.game.isValidMove($startTowerPos, $endTowerPos)){
      move($startTowerPos, $endTowerPos);
      // 
    }

    // this is referring to the <li></li>
    // if ($currentPlayer === "😼") {
    //   $square.text("😼")
    //   let $audio = $('#sound1')
    //   var audio = new Audio($audio.attr('src'));
    //   audio.play();
    // } else {
    //   $square.text("🐶")
    //   let $audio = $('#sound2')
    //   var audio = new Audio($audio.attr('src'));
    //   audio.play();
    // }

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

  setupTowers() {
    const $board = $('<div>');
    this.$el.append($board);
    $board.append('<ul>');
    let $ul = $('ul');
    for (let i = 0; i < 9; i++) {
      let $tower = $('<li>');
      $tower.addClass('tower');
      $tower.attr('target', `${i}`);
      let $innerDiv = ('<div class="emoji">');
      let $pos = `${Math.floor(i / 3)},${i % 3}`
      $tower.attr('pos', $pos);
      $tower.append($innerDiv);
      $ul.append($tower);
      if (i === 1){
        $tower.addClass('active');
        $tower.addClass('top');
      } else if (i === 4){
        $tower.addClass('active');
        $tower.addClass('middle');
      } else if (i === 7){
        $tower.addClass('active');
        $tower.addClass('bottom');
      }
    }
  }
}

module.exports = View;
