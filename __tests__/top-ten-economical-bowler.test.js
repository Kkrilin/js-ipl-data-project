const topTenEconomicalBowler = require('../src/server/top-ten-economical-bowler-logic');

const sampleMatches = [
  { id: 1, season: '2015' },
  { id: 2, season: '2015' },
  { id: 3, season: '2015' },
  { id: 4, season: '2015' },
  { id: 5, season: '2015' },
  { id: 6, season: '2015' },
  { id: 7, season: '2015' },
  { id: 8, season: '2015' },
];

const sampleDeliveries = [
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
];

// console.log(topTenEconomicalBowler(sampleMatches, sampleDeliveries));

test('top ten economical bowler in 2015', () => {
  expect(topTenEconomicalBowler(sampleMatches, sampleDeliveries)).toMatchObject(
    [
      { bowler: 'thakur', economy: 6 },
      { bowler: 'ishant', economy: 10 },
      { bowler: 'umesh', economy: 12 },
      { bowler: 'ishan', economy: 12 },
      { bowler: 'kumar', economy: 16 },
      { bowler: 'suresh', economy: 18 },
      { bowler: 'shami', economy: 18 },
      { bowler: 'nehra', economy: 24 },
      { bowler: 'starc', economy: 24 },
      { bowler: 'ashwin', economy: 24 },
    ],
  );
});
