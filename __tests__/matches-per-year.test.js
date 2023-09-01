// import { test } from "node:test";
// import { add } from "../src/server/matches-per-year.js";
// import { matchesPerYear } from '../src/server/matches-per-year.js';
const matchesPerYear = require('../src/server/matches-per-year-logic');

const sample = [
  {
    season: '2001',
  },
  {
    season: '2001',
  },
  {
    season: '2002',
  },
  {
    season: '2002',
  },
  {
    season: '2002',
  },
  {
    season: '2003',
  },
  {
    season: '2003',
  },
  {
    season: '2004',
  },
  {
    season: '2004',
  },
  {
    season: '2004',
  },
];
test('calculate matches per year', () => {
  expect(matchesPerYear(sample)).toMatchObject({
    2001: 2,
    2002: 3,
    2003: 2,
    2004: 3,
  });
});
