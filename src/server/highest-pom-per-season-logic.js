const highestPomPerSeason = function (matches) {
  let output = {};
  for (let match of matches) {
    output[match.season] = output[match.season] || {};
    output[match.season][match['player_of_match']] =
      (output[match.season][match['player_of_match']] || 0) + 1;
  }
  for (let season in output) {
    output[season] = maxValueKey(output[season]);
  }
  return output;
};

function maxValueKey(obj) {
  let max = -Infinity;
  let pomObj = {};
  for (let key in obj) {
    if (max < obj[key]) {
      max = obj[key];
    }
  }
  for (let key in obj) {
    if (obj[key] === max) {
      pomObj[key] = max;
    }
  }
  return pomObj;
}

module.exports = highestPomPerSeason;
