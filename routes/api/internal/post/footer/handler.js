"use strict";


const hsc = require ("htmlspecialchars");
const trim = require ("trim");


module. exports = (req, res) => {

  let footer = hsc (req. body. textFooter);
  footer = trim (footer);


  db. push ("/base/footer", footer);

  return undefined;
};
