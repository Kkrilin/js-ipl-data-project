let matchesPerYear = function (matchData) {
  let outputObject = {};
  for (let match of matchData) {
    outputObject[match.season] = (outputObject[match.season] || 0) + 1;
  }
  return outputObject;
};

module.exports = matchesPerYear;
