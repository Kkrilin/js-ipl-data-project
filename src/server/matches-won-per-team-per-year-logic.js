let matchesWonPerTeamPerYear = function (matches) {
  const matchesWonPerTeamPerYearObj = {};
  for (let match of matches) {
    matchesWonPerTeamPerYearObj[match.season] =
      matchesWonPerTeamPerYearObj[match.season] || {};
    matchesWonPerTeamPerYearObj[match.season][match.winner] =
      (matchesWonPerTeamPerYearObj[match.season][match.winner] || 0) + 1;
  }
  return matchesWonPerTeamPerYearObj;
};

module.exports = matchesWonPerTeamPerYear;
