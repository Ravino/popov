"use strict";


const hsc = require ("htmlspecialchars");
const trim = require ("trim");


module. exports = (req, res) => {

  let header = hsc (req. body. textHeader);
  header = trim (header);


  db. push ("/base/header", header);

  return undefined;
};
