const matchesWonPerTeamPerYear = require('../src/server/matches-won-per-team-per-year-logic');
const sample = [
  {
    season: '2001',
    winner: 'goa',
  },
  {
    season: '2001',
    winner: 'goa',
  },
  {
    season: '2002',
    winner: 'pune',
  },
  {
    season: '2002',
    winner: 'goa',
  },
  {
    season: '2002',
    winner: 'patna',
  },
  {
    season: '2003',
    winner: 'patna',
  },
  {
    season: '2003',
    winner: 'goa',
  },
  {
    season: '2004',
    winner: 'patna',
  },
  {
    season: '2004',
    winner: 'goa',
  },
  {
    season: '2004',
    winner: 'pune',
  },
];

test('calculate matches per year', () => {
  expect(matchesWonPerTeamPerYear(sample)).toMatchObject([
    { season: '2001', 'win per team': { goa: 2 } },
    { season: '2002', 'win per team': { pune: 1, goa: 1, patna: 1 } },
    { season: '2003', 'win per team': { patna: 1, goa: 1 } },
    { season: '2004', 'win per team': { patna: 1, goa: 1, pune: 1 } },
  ]);
});
