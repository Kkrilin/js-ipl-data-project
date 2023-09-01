let matchesWonPerTeamPerYear = function (Matchdata) {
  let matchesWonPerTeamPerYearArr = [];
  for (let index = 0; index < Matchdata.length; index++) {
    let perSeasonObj = {};
    perSeasonObj.season = Matchdata[index].season;
    if (
      undefined ===
      matchesWonPerTeamPerYearArr.find(
        (obj) => obj.season === perSeasonObj.season,
      )
    ) {
      matchesWonPerTeamPerYearArr.push(perSeasonObj);
    }
  }
  for (let index = 0; index < matchesWonPerTeamPerYearArr.length; index++) {
    let perTeamWin = {};
    for (let match of Matchdata) {
      if (match.season === matchesWonPerTeamPerYearArr[index].season) {
        perTeamWin[match.winner] = (perTeamWin[match.winner] || 0) + 1;
      }
    }
    matchesWonPerTeamPerYearArr[index]['win per team'] = perTeamWin;
  }

  // console.log(matchesWonPerTeamPerYearArr);
  return matchesWonPerTeamPerYearArr;
};

module.exports = matchesWonPerTeamPerYear;
