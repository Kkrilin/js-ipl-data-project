const extraRunsPerTeam = function (matches, deliveries) {
  const seasonIdObj = matches.reduce((result, match) => {
    result[match.id] = match.season;
    return result;
  }, {});
  const output = {};
  for (let delivery of deliveries) {
    if (seasonIdObj[delivery['match_id']] === '2016') {
      output[delivery['bowling_team']] =
        (output[delivery['bowling_team']] || 0) +
        Number(delivery['extra_runs']);
    }
  }
  return output;
};
module.exports = extraRunsPerTeam;
