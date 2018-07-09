export default function checkPlayerWin(switches: any): boolean {
  for(let r = 0; r < switches.length; r++) {
    for(let c = 0; c < switches[0].length; c++) {
      if(switches[r][c] === 0) {
        return false;
      }
    }
  }

  return true;
}
