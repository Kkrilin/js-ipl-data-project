const playerDismissedAnotherPlayer = function (_, deliveries) {
  const playerDismissed = {};
  for (let delivery of deliveries) {
    let playerOut = delivery['player_dismissed'];
    if (playerOut) {
      let key = `${playerOut}-${delivery['bowler']}`;
      playerDismissed[key] = (playerDismissed[key] || 0) + 1;
    }
  }
  // return playerDismissed;
  return maxKeyValuePair(playerDismissed);
};

function maxKeyValuePair(obj) {
  let max = -Infinity;
  let outputObj = {};
  for (let key in obj) {
    if (max < obj[key]) {
      max = obj[key];
    }
  }
  for (let key in obj) {
    if (obj[key] === max) {
      outputObj[key] = max;
    }
  }
  return outputObj;
}

module.exports = playerDismissedAnotherPlayer;
