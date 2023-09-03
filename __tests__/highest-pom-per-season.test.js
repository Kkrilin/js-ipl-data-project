const highestPomPerSeason = require('../src/server/highest-pom-per-season-logic');

const sampleMatches = [
  { season: '2001', player_of_match: 'suresh' },
  { season: '2001', player_of_match: 'mahesh' },
  { season: '2001', player_of_match: 'ramesh' },
  { season: '2001', player_of_match: 'ramesh' },
  { season: '2002', player_of_match: 'mahesh' },
  { season: '2002', player_of_match: 'sonu' },
  { season: '2002', player_of_match: 'sonu' },
  { season: '2002', player_of_match: 'sonu' },
  { season: '2002', player_of_match: 'ramesh' },
  { season: '2003', player_of_match: 'suresh' },
  { season: '2003', player_of_match: 'suresh' },
  { season: '2003', player_of_match: 'sonu' },
  { season: '2003', player_of_match: 'suresh' },
  { season: '2003', player_of_match: 'mahesh' },
  { season: '2004', player_of_match: 'ramesh' },
  { season: '2004', player_of_match: 'mahesh' },
  { season: '2004', player_of_match: 'mahesh' },
  { season: '2004', player_of_match: 'sonu' },
  { season: '2004', player_of_match: 'mahesh' },
];

test('highest player of the match for each season', () => {
  expect(highestPomPerSeason(sampleMatches)).toMatchObject({
    2001: 'ramesh',
    2002: 'sonu',
    2003: 'suresh',
    2004: 'mahesh',
  });
});
