let matchesPerYear = function (matches) {
  let outputObject = {};
  for (let match of matches) {
    outputObject[match.season] = (outputObject[match.season] || 0) + 1;
  }
  return outputObject;
};

module.exports = matchesPerYear;
