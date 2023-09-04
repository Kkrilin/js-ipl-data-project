const bestEconomySuperOver = require('../src/server/best-economy-super-overs-logic');

const dummyArguments = [
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
  {
    match_id: 1,
    is_super_over: '1',
    bowler: 'kumar',
    total_runs: '1',
    wide_runs: '0',
  },
  {
    match_id: 1,
    is_super_over: '1',
    bowler: 'umesh',
    total_runs: '2',
    wide_runs: '0',
  },
  {
    match_id: 2,
    is_super_over: '1',
    bowler: 'ishant',
    total_runs: '3',
    wide_runs: '0',
  },
  {
    match_id: 2,
    is_super_over: '1',
    bowler: 'nehra',
    total_runs: '4',
    wide_runs: '0',
  },
  {
    match_id: 3,
    is_super_over: '1',
    bowler: 'starc',
    total_runs: '4',
    wide_runs: '0',
  },
  {
    match_id: 3,
    is_super_over: '1',
    bowler: 'suresh',
    total_runs: '3',
    wide_runs: '0',
  },
  {
    match_id: 4,
    is_super_over: '1',
    bowler: 'ashwin',
    total_runs: '4',
    wide_runs: '0',
  },
  {
    match_id: 4,
    is_super_over: '1',
    bowler: 'jadeja',
    total_runs: '4',
    wide_runs: '0',
  },
  {
    match_id: 5,
    is_super_over: '1',
    bowler: 'thakur',
    total_runs: '1',
    wide_runs: '0',
  },
  {
    match_id: 5,
    is_super_over: '1',
    bowler: 'ishan',
    total_runs: '2',
    wide_runs: '0',
  },
  {
    match_id: 6,
    is_super_over: '1',
    bowler: 'kumar',
    total_runs: '4',
    wide_runs: '0',
  },
  {
    match_id: 6,
    is_super_over: '1',
    bowler: 'shami',
    total_runs: '4',
    wide_runs: '0',
  },
  {
    match_id: 7,
    is_super_over: '1',
    bowler: 'umesh',
    total_runs: '3',
    wide_runs: '0',
  },
  {
    match_id: 7,
    is_super_over: '1',
    bowler: 'ishant',
    total_runs: '1',
    wide_runs: '0',
  },
  {
    match_id: 7,
    is_super_over: '1',
    bowler: 'umesh',
    total_runs: '2',
    wide_runs: '0',
  },
  {
    match_id: 8,
    is_super_over: '1',
    bowler: 'kumar',
    total_runs: '3',
    wide_runs: '0',
  },
  {
    match_id: 8,
    is_super_over: '1',
    bowler: 'shami',
    total_runs: '2',
    wide_runs: '0',
  },
  {
    match_id: 8,
    is_super_over: '1',
    bowler: 'umesh',
    total_runs: '1',
    wide_runs: '0',
  },
  {
    match_id: 8,
    is_super_over: '1',
    bowler: 'ishant',
    total_runs: '1',
    wide_runs: '0',
  },
  {
    match_id: 8,
    is_super_over: '1',
    bowler: 'dinda',
    total_runs: '1',
    wide_runs: '0',
  },
];

test('bowler with best economy in super overs', () => {
  expect(bestEconomySuperOver(dummyArguments, sampleDeliveries)).toMatchObject({
    thakur: 6,
    dinda: 6,
  });
});
