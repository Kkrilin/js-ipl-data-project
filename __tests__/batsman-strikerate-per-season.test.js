const batsmanStrikeRateSeason = require('../src/server/batsman-strikerate-per-season-logic');

const sampleMatches = [
  { id: 1, season: '2015' },
  { id: 2, season: '2015' },
  { id: 3, season: '2015' },
  { id: 4, season: '2016' },
  { id: 5, season: '2016' },
  { id: 6, season: '2016' },
  { id: 7, season: '2016' },
  { id: 8, season: '2016' },
];

const sampleDeliveries = [
  { match_id: 1, batsman: 'kumar', batsman_runs: '1', wide_runs: '0' },
  { match_id: 1, batsman: 'umesh', batsman_runs: '2', wide_runs: '0' },
  { match_id: 2, batsman: 'ishant', batsman_runs: '3', wide_runs: '0' },
  { match_id: 2, batsman: 'nehra', batsman_runs: '4', wide_runs: '0' },
  { match_id: 3, batsman: 'starc', batsman_runs: '4', wide_runs: '0' },
  { match_id: 3, batsman: 'suresh', batsman_runs: '3', wide_runs: '0' },
  { match_id: 4, batsman: 'ashwin', batsman_runs: '4', wide_runs: '0' },
  { match_id: 4, batsman: 'jadeja', batsman_runs: '4', wide_runs: '0' },
  { match_id: 5, batsman: 'thakur', batsman_runs: '1', wide_runs: '0' },
  { match_id: 5, batsman: 'ishan', batsman_runs: '2', wide_runs: '0' },
  { match_id: 6, batsman: 'kumar', batsman_runs: '4', wide_runs: '0' },
  { match_id: 6, batsman: 'shami', batsman_runs: '4', wide_runs: '0' },
  { match_id: 7, batsman: 'umesh', batsman_runs: '3', wide_runs: '0' },
  { match_id: 7, batsman: 'ishant', batsman_runs: '1', wide_runs: '0' },
  { match_id: 7, batsman: 'umesh', batsman_runs: '2', wide_runs: '0' },
  { match_id: 8, batsman: 'kumar', batsman_runs: '3', wide_runs: '0' },
  { match_id: 8, batsman: 'shami', batsman_runs: '2', wide_runs: '0' },
  { match_id: 8, batsman: 'umesh', batsman_runs: '1', wide_runs: '0' },
  { match_id: 8, batsman: 'ishant', batsman_runs: '1', wide_runs: '0' },
];

// batsmanStrikeRateSeason(sampleMatches, sampleDeliveries);

test('cbatcman strikerate per season', () => {
  expect(
    batsmanStrikeRateSeason(sampleMatches, sampleDeliveries),
  ).toMatchObject({
    2015: {
      kumar: { runs: 1, ball: 1, strikrate: '100.00' },
      umesh: { runs: 2, ball: 1, strikrate: '200.00' },
      ishant: { runs: 3, ball: 1, strikrate: '300.00' },
      nehra: { runs: 4, ball: 1, strikrate: '400.00' },
      starc: { runs: 4, ball: 1, strikrate: '400.00' },
      suresh: { runs: 3, ball: 1, strikrate: '300.00' },
    },
    2016: {
      ashwin: { runs: 4, ball: 1, strikrate: '400.00' },
      jadeja: { runs: 4, ball: 1, strikrate: '400.00' },
      thakur: { runs: 1, ball: 1, strikrate: '100.00' },
      ishan: { runs: 2, ball: 1, strikrate: '200.00' },
      kumar: { runs: 7, ball: 2, strikrate: '350.00' },
      shami: { runs: 6, ball: 2, strikrate: '300.00' },
      umesh: { runs: 6, ball: 3, strikrate: '200.00' },
      ishant: { runs: 2, ball: 2, strikrate: '100.00' },
    },
  });
});
