const wonTossWonMatch = require('../src/server/won-toss-won-match-logic');
const sample = [
  { winner: 'pune', toss_winner: 'goa' },
  { winner: 'patna', toss_winner: 'patna' },
  { winner: 'pune', toss_winner: 'pune' },
  { winner: 'goa', toss_winner: 'goa' },
  { winner: 'patna', toss_winner: 'patna' },
  { winner: 'pune', toss_winner: 'goa' },
  { winner: 'pune', toss_winner: 'patna' },
  { winner: 'pune', toss_winner: 'goa' },
  { winner: 'patna', toss_winner: 'goa' },
];

test('number of times each team won the toss and won the match', () => {
  expect(wonTossWonMatch(sample)).toMatchObject({
    patna: 2,
    pune: 1,
    goa: 1,
  });
});
