const playerDismissedAnotherPlayer = require('../src/server/highest-number-player-dismissed-player-logic');

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
  { player_dismissed: 'kumar', bowler: 'dhoni' },
  { player_dismissed: 'umesh', bowler: 'virat' },
  { player_dismissed: 'ishant', bowler: 'rohit' },
  { player_dismissed: 'nehra', bowler: 'virat' },
  { player_dismissed: 'starc', bowler: 'jadeja' },
  { player_dismissed: 'suresh', bowler: 'dhoni' },
  { player_dismissed: 'ashwin', bowler: 'virat' },
  { player_dismissed: 'jadeja', bowler: 'dhoni' },
  { player_dismissed: 'thakur', bowler: 'virat' },
  { player_dismissed: 'ishan', bowler: 'jadeja' },
  { player_dismissed: 'kumar', bowler: 'rohit' },
  { player_dismissed: 'shami', bowler: 'jadeja' },
  { player_dismissed: 'umesh', bowler: 'rohit' },
  { player_dismissed: 'ishant', bowler: 'virat' },
  { player_dismissed: 'umesh', bowler: 'dhoni' },
  { player_dismissed: 'kumar', bowler: 'dhoni' },
  { player_dismissed: 'shami', bowler: 'rohit' },
  { player_dismissed: 'umesh', bowler: 'jadeja' },
  { player_dismissed: 'ishant', bowler: 'virat' },
];

test('highest nmber player dismissed another player', () => {
  expect(
    playerDismissedAnotherPlayer(sampleMatches, sampleDeliveries),
  ).toMatchObject({ 'kumar-dhoni': 2 });
});
