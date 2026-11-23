let size = 8;
let board = " ";

for (let row = 0; row < size; row++) {
  for (let coloumn = 0; coloumn < size; coloumn++) {
    if ((row + coloumn) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
