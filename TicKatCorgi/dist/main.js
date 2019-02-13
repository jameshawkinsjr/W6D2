!function(t){var e={};function r(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){t.exports=function(t){this.msg=t}},function(t,e,r){const n=r(2),s=r(3);$(()=>{const t=$("figure");let e=new s;new n(e,t)})},function(t,e){t.exports=class{constructor(t,e){this.game=t,this.$el=e,this.setupBoard(),this.bindEvents()}bindEvents(){this.$el.on("click",".square",t=>{const e=$(t.target);this.makeMove(e)})}makeMove(t){let e=this.game.currentPlayer;try{this.game.playMove(t.attr("pos"))}catch(t){alert("Invalid Position!")}if("😼"===e){t.text("😼");let e=$("#sound1");new Audio(e.attr("src")).play()}else{t.text("🐶");let e=$("#sound2");new Audio(e.attr("src")).play()}if(this.game.isOver()&&this.game.winner()){let t=this.game.winner(),e=$('<h1 class="winner"></h1>');e.text(`Congratulations! ${t} wins!`),$(".winner").append(e)}else if(this.game.isOver()){let t=$('<h1 class="winner"></h1>');t.text("😼 Congratulations! Everyone wins! 🐶"),$(".winner").append(t)}}setupBoard(){const t=$("<div>");this.$el.append(t),t.append("<ul>");let e=$("ul");for(let t=0;t<9;t++){let r=$("<li>");r.addClass("square"),r.attr("target",`${t}`);let n='<div class="emoji">',s=`${Math.floor(t/3)},${t%3}`;r.attr("pos",s),r.append(n),e.append(r)}}}},function(t,e,r){const n=r(4),s=r(0);t.exports=class{constructor(){this.board=new n,this.currentPlayer=n.marks[0]}isOver(){return this.board.isOver()}playMove(t){this.board.placeMark(t,this.currentPlayer),this.swapTurn()}promptMove(t,e){this.board.print(),console.log(`Current Turn: ${this.currentPlayer}`),t.question("Enter rowIdx: ",r=>{const n=parseInt(r);t.question("Enter colIdx: ",t=>{const r=parseInt(t);e([n,r])})})}run(t,e){this.promptMove(t,r=>{try{this.playMove(r)}catch(t){if(!(t instanceof s))throw t;console.log(t.msg)}this.isOver()?(this.board.print(),this.winner()?console.log(`${this.winner()} has won!`):console.log("NO ONE WINS!"),e()):this.run(t,e)})}swapTurn(){this.currentPlayer===n.marks[0]?this.currentPlayer=n.marks[1]:this.currentPlayer=n.marks[0]}winner(){return this.board.winner()}}},function(t,e,r){const n=r(0);class s{constructor(){this.grid=s.makeGrid()}isEmptyPos(t){if(!s.isValidPos(t))throw new n("Is not valid position!");return null===this.grid[t[0]][t[1]]}isOver(){if(null!=this.winner())return!0;for(let t=0;t<3;t++)for(let e=0;e<3;e++)if(this.isEmptyPos([t,e]))return!1;return!0}placeMark(t,e){if(t=t.split(","),!this.isEmptyPos(t))throw new n("Is not an empty position!");this.grid[t[0]][t[1]]=e}print(){const t=[];for(let e=0;e<3;e++){const r=[];for(let t=0;t<3;t++)r.push(this.grid[e][t]?this.grid[e][t]:" ");t.push(`${r.join("|")}\n`)}console.log(t.join("-----\n"))}winner(){const t=[[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]],[[0,0],[1,1],[2,2]],[[2,0],[1,1],[0,2]]];for(let e=0;e<t.length;e++){const r=this.winnerHelper(t[e]);if(null!=r)return r}return null}winnerHelper(t){for(let e=0;e<s.marks.length;e++){const r=s.marks[e];let n=!0;for(let e=0;e<3;e++){const s=t[e];this.grid[s[0]][s[1]]!=r&&(n=!1)}if(n)return r}return null}static isValidPos(t){return 0<=t[0]&&t[0]<3&&0<=t[1]&&t[1]<3}static makeGrid(){const t=[];for(let e=0;e<3;e++){t.push([]);for(let r=0;r<3;r++)t[e].push(null)}return t}}s.marks=["😼","🐶"],t.exports=s}]);