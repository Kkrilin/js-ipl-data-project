const batsmanStrikeRateSeason = function (matches, deliveries) {
  const seasonIdObj = matches.reduce((output, match) => {
    output[match.id] = match.season;
    return output;
  }, {});
  // console.log(seasonIdObj);
  const strikeRatePerSeason = {};

  for (let delivery of deliveries) {
    if (delivery['wide_runs'] === '0') {
      const season = seasonIdObj[delivery['match_id']];

      strikeRatePerSeason[season] = strikeRatePerSeason[season] || {};

      strikeRatePerSeason[season][delivery['batsman']] = strikeRatePerSeason[
        season
      ][delivery['batsman']] || { runs: 0, ball: 0, strikrate: 0 };

      strikeRatePerSeason[season][delivery['batsman']].runs +=
        +delivery['batsman_runs'];
      strikeRatePerSeason[season][delivery['batsman']].ball += 1;
      let totalBalls = strikeRatePerSeason[season][delivery['batsman']].ball;
      let totalRuns = strikeRatePerSeason[season][delivery['batsman']].runs;
      if (totalBalls > 0) {
        strikeRatePerSeason[season][delivery['batsman']].strikrate = (
          (totalRuns / totalBalls) *
          100
        ).toFixed(2);
      }
    }
  }
  return strikeRatePerSeason;
};

module.exports = batsmanStrikeRateSeason;
