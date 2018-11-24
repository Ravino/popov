"use strict";


const hsc = require ("htmlspecialchars");
const trim = require ("trim");


module. exports = (req, res) => {

  let main = hsc (req. body. textMain);
  main = trim (main);


  db. push ("/main", main);

  return undefined;
};
