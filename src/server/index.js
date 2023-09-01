const csv = require('csv-parser');
const fs = require('fs');
const matchesPerYear = require('./matches-per-year-logic');
const matchesWonPerTeamPerYear = require('./matches-won-per-team-per-year-logic');

csvReadJsonWrite(matchesPerYear, 'matchesPerYear');
csvReadJsonWrite(matchesWonPerTeamPerYear, 'matchesWonPerTeamPerYear');

function csvReadJsonWrite(cb, path) {
  const results = [];
  fs.createReadStream('../data/matches.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
      fs.writeFile(
        `../public/output/${path}.json`,
        JSON.stringify(cb(results)),
        (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
        },
      );
    });
}
