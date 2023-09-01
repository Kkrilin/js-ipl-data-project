const csv = require('csv-parser');
const fs = require('fs');
const matchesWonPerTeamPerYear = require('./matches-won-per-team-per-year-logic');
const results = [];

fs.createReadStream('../data/matches.csv')
  .pipe(csv({}))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // console.log(results);
    fs.writeFile(
      '../public/output/matchesWonPerTeamPerYear.json',
      JSON.stringify(matchesWonPerTeamPerYear(results)),
      (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      },
    );
  });
