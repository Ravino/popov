"use strict";

module. exports = (req, res) => {

  try {
    const main = global. db. getData ("/main");
    res. json (main);
    return true;
  }

  catch (err) {
    res. json ("");
    return false;
  }
  return undefined;
};
