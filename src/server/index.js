const csv = require('csv-parser');
const fs = require('fs');
const matchesPerYear = require('./matches-per-year-logic');
const matchesWonPerTeamPerYear = require('./matches-won-per-team-per-year-logic');
const extraRunsPerTeam = require('./extra-runs-per-team-logic');
const topTenEconomicalBowler = require('./top-ten-economical-bowler-logic');
const wonTossWonMatch = require('./won-toss-won-match-logic');
const highestPomPerSeason = require('./highest-pom-per-season-logic');
const batsmanStrikeRateSeason = require('./batsman-strikerate-per-season-logic');
const playerDismissedAnotherPlayer = require('./highest-number-player-dismissed-player-logic');
const bestEconomySuperOver = require('./best-economy-super-overs-logic');

// 1. Number of matches played per year for all the years in IPL.
csvReadJsonWrite(matchesPerYear, 'matchesPerYear');

// 2. Number of matches won per team per year in IPL.
csvReadJsonWrite(matchesWonPerTeamPerYear, 'matchesWonPerTeamPerYear');

// 3.Extra runs conceded per team in the year 2016
csvReadJsonWrite(extraRunsPerTeam, 'extraRunsPerTeam');

// 4.Top 10 economical bowlers in the year 2015
csvReadJsonWrite(topTenEconomicalBowler, 'topTenEconomicalBowler');

// 5.Find the number of times each team won the toss and also won the match
csvReadJsonWrite(wonTossWonMatch, 'wonTossWonMatch');

// 6.Find a player who has won the highest number of Player of the Match awards for each season
csvReadJsonWrite(highestPomPerSeason, 'highestPomPerSeason');

// 7.Find the strike rate of a batsman for each season
csvReadJsonWrite(batsmanStrikeRateSeason, 'batsmanStrikeRateSeason');

// 8.Find the highest number of times one player has been dismissed by another player
csvReadJsonWrite(playerDismissedAnotherPlayer, 'playerDismissedAnotherPlayer');

// 9.Find the bowler with the best economy in super overs
csvReadJsonWrite(bestEconomySuperOver, 'bestEconomySuperOver');

function csvReadJsonWrite(cb, path) {
  const matches = [];
  let deliveries = [];

  fs.createReadStream('../data/matches.csv')
    .pipe(csv({}))
    .on('data', (data) => matches.push(data))
    .on('end', () => {
      fs.createReadStream('../data/deliveries.csv')
        .pipe(csv())
        .on('data', (data) => deliveries.push(data))
        .on('end', () => {
          fs.writeFile(
            `../public/output/${path}.json`,
            JSON.stringify(cb(matches, deliveries)),
            (err) => {
              if (err) throw err;
              console.log('The file has been saved!');
            },
          );
        });
    });
}
