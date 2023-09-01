// import csvParser from 'csv-parser';
// import { createReadStream } from 'node:fs';
// import { writeFile } from 'node:fs';
const csv = require('csv-parser');
const fs = require('fs');
const matchesPerYear = require('./matches-per-year-logic');
const results = [];

fs.createReadStream('../data/matches.csv')
  .pipe(csv({}))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    fs.writeFile(
      '../public/output/matchesPerYear.json',
      JSON.stringify(matchesPerYear(results)),
      (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      },
    );
    // console.log(matchesPerYear(results));
  });
