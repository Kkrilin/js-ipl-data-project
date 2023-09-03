const wonTossWonMatch = function (matches) {
  let output = {};
  for (let match of matches) {
    if (match.winner === match['toss_winner']) {
      output[match.winner] = (output[match.winner] || 0) + 1;
    }
  }
  return output;
};

module.exports = wonTossWonMatch;
