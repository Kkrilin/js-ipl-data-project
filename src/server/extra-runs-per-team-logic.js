const extraRunsPerTeam = function (matches, deliveries) {
  const filterMatches = matches.filter((match) => match.season === '2016');
  const firstMatchId = filterMatches[0].id;
  const lastMatchId = filterMatches[filterMatches.length - 1].id;
  console.log(firstMatchId, lastMatchId);
  const output = {};
  for (let delivery of deliveries) {
    if (
      delivery['match_id'] >= firstMatchId &&
      delivery['match_id'] <= lastMatchId
    ) {
      output[delivery['bowling_team']] =
        (output[delivery['bowling_team']] || 0) +
        Number(delivery['extra_runs']);
    }
  }
  return output;
};
module.exports = extraRunsPerTeam;
