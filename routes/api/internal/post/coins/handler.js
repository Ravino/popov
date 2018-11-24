"use strict";


const hsc = require ("htmlspecialchars");
const trim = require ("trim");


module. exports = (req, res) => {

  let coins = hsc (req. body. textCoins);
  coins = trim (coins);


  db. push ("/coins", coins);

  return undefined;
};
