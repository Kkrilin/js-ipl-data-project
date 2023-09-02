const extraRunsPerTeam = require('../src/server/extra-runs-per-team-logic');

const sampleMatches = [
  { id: 1, season: '2015' },
  { id: 2, season: '2015' },
  { id: 3, season: '2015' },
  { id: 4, season: '2015' },
  { id: 5, season: '2016' },
  { id: 6, season: '2016' },
  { id: 7, season: '2016' },
  { id: 8, season: '2016' },
];

const sampleDeliveries = [
  { match_id: 1, extra_runs: 2, bowling_team: 'pune' },
  { match_id: 1, extra_runs: 2, bowling_team: 'goa' },
  { match_id: 2, extra_runs: 0, bowling_team: 'patna' },
  { match_id: 2, extra_runs: 4, bowling_team: 'pune' },
  { match_id: 3, extra_runs: 3, bowling_team: 'patna' },
  { match_id: 3, extra_runs: 2, bowling_team: 'goa' },
  { match_id: 4, extra_runs: 0, bowling_team: 'patna' },
  { match_id: 4, extra_runs: 2, bowling_team: 'goa' },
  { match_id: 5, extra_runs: 6, bowling_team: 'patna' },
  { match_id: 5, extra_runs: 2, bowling_team: 'pune' },
  { match_id: 6, extra_runs: 10, bowling_team: 'goa' },
  { match_id: 6, extra_runs: 2, bowling_team: 'patna' },
  { match_id: 7, extra_runs: 6, bowling_team: 'goa' },
  { match_id: 7, extra_runs: 2, bowling_team: 'patna' },
  { match_id: 7, extra_runs: 1, bowling_team: 'goa' },
  { match_id: 8, extra_runs: 2, bowling_team: 'patna' },
  { match_id: 8, extra_runs: 7, bowling_team: 'goa' },
  { match_id: 8, extra_runs: 13, bowling_team: 'patna' },
  { match_id: 8, extra_runs: 2, bowling_team: 'pune' },
];

test('calculate extra runs per team in 2016', () => {
  expect(extraRunsPerTeam(sampleMatches, sampleDeliveries)).toMatchObject({
    patna: 25,
    goa: 24,
    pune: 4,
  });
});
