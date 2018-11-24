"use strict";

const hsc = require ("htmlspecialchars");
const trim = require ("trim");



module. exports = (req, res) => {

  let delTeatcher = hsc (req. body. delTeatcher);
  delTeatcher = trim (delTeatcher);
  delTeatcher = Number (delTeatcher);


  db. delete ("/teatchers[" + delTeatcher + "]");


  return undefined;
};
