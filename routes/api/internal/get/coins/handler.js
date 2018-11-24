"use strict";

module. exports = (req, res) => {

  try {
    const coins = global. db. getData ("/coins");
    res. json (coins);
    return true;
  }

  catch (err) {
    res. json ("");
    return false;
  }
  return undefined;
};
