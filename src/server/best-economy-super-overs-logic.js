const bestEconomySuperOver = function (_, deliveries) {
  const filterDeliveries = deliveries.filter(
    (delivery) => delivery.is_super_over === '1',
  );
  const superOverEconomy = {};
  for (let delivery of filterDeliveries) {
    superOverEconomy[delivery['bowler']] =
      superOverEconomy[delivery['bowler']] || {};
    superOverEconomy[delivery['bowler']]['con_runs'] =
      (superOverEconomy[delivery['bowler']]['con_runs'] || 0) +
      +delivery['total_runs'];
    if (delivery['noball_runs'] === '0' || delivery['wide_runs'] === '0') {
      superOverEconomy[delivery['bowler']]['ball'] =
        (superOverEconomy[delivery['bowler']]['ball'] || 0) + 1;
    }

    let runs = superOverEconomy[delivery['bowler']]['con_runs'];
    let balls = superOverEconomy[delivery['bowler']]['ball'];
    superOverEconomy[delivery['bowler']]['economy'] = (runs / balls) * 6;
  }

  for (let key in superOverEconomy) {
    superOverEconomy[key] = superOverEconomy[key]['economy'];
  }
  // return superOverEconomy;
  return minKeyValuePair(superOverEconomy);
};

function minKeyValuePair(obj) {
  let min = Infinity;
  let outputObj = {};
  for (let key in obj) {
    if (min > obj[key]) {
      min = obj[key];
    }
  }
  for (let key in obj) {
    if (obj[key] === min) {
      outputObj[key] = min;
    }
  }
  return outputObj;
}

module.exports = bestEconomySuperOver;
