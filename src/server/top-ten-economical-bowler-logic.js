const topTenEconomicalBowler = function (matches, deliveries) {
  const filterMatches = matches.filter((match) => match.season === '2015');
  const firstMatchId = filterMatches[0].id;
  const lastMatchId = filterMatches[filterMatches.length - 1].id;
  // console.log(firstMatchId, lastMatchId);
  let runConced = {};
  let ballBowled = {};
  for (let delivery of deliveries) {
    if (
      delivery['match_id'] >= firstMatchId &&
      delivery['match_id'] <= lastMatchId
    ) {
      runConced[delivery.bowler] =
        (runConced[delivery.bowler] || 0) + Number(delivery['total_runs']);
      if (delivery['noball_runs'] === '0' || delivery['wide_runs'] === '0') {
        ballBowled[delivery.bowler] = (ballBowled[delivery.bowler] || 0) + 1;
      }
    }
  }
  for (let bowler in runConced) {
    //   // if (ballBowled[bowler] < 30) {
    //   //   delete ballBowled[bowler];
    //   //   delete runConced[bowler];
    //   // } else {
    runConced[bowler] = (runConced[bowler] / ballBowled[bowler]) * 6;
    //   // }
  }
  // console.log(runConced);
  // console.log(ballBowled);
  return Object.entries(runConced)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 10);
};

module.exports = topTenEconomicalBowler;
