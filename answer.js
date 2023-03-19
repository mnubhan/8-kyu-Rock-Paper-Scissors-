const rps = (p1, p2) => {
  let rules = {scissors:"paper",paper:"rock",rock:"scissors"}
  return p1 === p2 ? "Draw!" : p2 === rules[p1] ? "Player 1 won!" : "Player 2 won!"
};
