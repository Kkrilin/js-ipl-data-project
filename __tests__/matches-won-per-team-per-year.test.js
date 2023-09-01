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
  expect(matchesWonPerTeamPerYear(sample)).toMatchObject({
    2001: { goa: 2 },
    2002: { pune: 1, goa: 1, patna: 1 },
    2003: { patna: 1, goa: 1 },
    2004: { patna: 1, goa: 1, pune: 1 },
  });
});
