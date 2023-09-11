const topTenEconomicalBowler = function (matches, deliveries, minBowled) {
  const seasonIdObj = matches.reduce((result, match) => {
    result[match.id] = match.season;
    return result;
  }, {});
  let runConced = {};
  let ballBowled = {};
  for (let delivery of deliveries) {
    if (seasonIdObj[delivery['match_id']] === '2015') {
      runConced[delivery.bowler] =
        (runConced[delivery.bowler] || 0) + Number(delivery['total_runs']);
      if (delivery['noball_runs'] === '0' || delivery['wide_runs'] === '0') {
        ballBowled[delivery.bowler] = (ballBowled[delivery.bowler] || 0) + 1;
      }
    }
  }
  for (let bowler in runConced) {
    if (ballBowled[bowler] < minBowled) {
      delete ballBowled[bowler];
      delete runConced[bowler];
    } else {
      runConced[bowler] = (runConced[bowler] / ballBowled[bowler]) * 6;
    }
  }
  // console.log(runConced);
  // console.log(ballBowled);
  return Object.entries(runConced)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 10)
    .map((El) => {
      let obj = {};
      obj['bowler'] = El[0];
      obj['economy'] = El[1];
      return obj;
    });
};

module.exports = topTenEconomicalBowler;
