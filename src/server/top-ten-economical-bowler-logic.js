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

console.log(
  topTenEconomicalBowler(
    [
      { id: 1, season: '2015' },
      { id: 2, season: '2015' },
      { id: 3, season: '2015' },
      { id: 4, season: '2015' },
      { id: 5, season: '2015' },
      { id: 6, season: '2015' },
      { id: 7, season: '2015' },
      { id: 8, season: '2015' },
    ],
    [
      { match_id: 1, bowler: 'kumar', total_runs: '1', wide_runs: '0' },
      { match_id: 1, bowler: 'umesh', total_runs: '2', wide_runs: '0' },
      { match_id: 2, bowler: 'ishant', total_runs: '3', wide_runs: '0' },
      { match_id: 2, bowler: 'nehra', total_runs: '4', wide_runs: '0' },
      { match_id: 3, bowler: 'starc', total_runs: '4', wide_runs: '0' },
      { match_id: 3, bowler: 'suresh', total_runs: '3', wide_runs: '0' },
      { match_id: 4, bowler: 'ashwin', total_runs: '4', wide_runs: '0' },
      { match_id: 4, bowler: 'jadeja', total_runs: '4', wide_runs: '0' },
      { match_id: 5, bowler: 'thakur', total_runs: '1', wide_runs: '0' },
      { match_id: 5, bowler: 'ishan', total_runs: '2', wide_runs: '0' },
      { match_id: 6, bowler: 'kumar', total_runs: '4', wide_runs: '0' },
      { match_id: 6, bowler: 'shami', total_runs: '4', wide_runs: '0' },
      { match_id: 7, bowler: 'umesh', total_runs: '3', wide_runs: '0' },
      { match_id: 7, bowler: 'ishant', total_runs: '1', wide_runs: '0' },
      { match_id: 7, bowler: 'umesh', total_runs: '2', wide_runs: '0' },
      { match_id: 8, bowler: 'kumar', total_runs: '3', wide_runs: '0' },
      { match_id: 8, bowler: 'shami', total_runs: '2', wide_runs: '0' },
      { match_id: 8, bowler: 'umesh', total_runs: '1', wide_runs: '0' },
      { match_id: 8, bowler: 'ishant', total_runs: '1', wide_runs: '0' },
    ],
    2,
  ),
);
