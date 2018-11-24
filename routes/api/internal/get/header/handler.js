"use strict";

module. exports = (req, res) => {

  try {
    const header = global. db. getData ("/base/header");
    res. json (header);
    return true;
  }

  catch (err) {
    res. json ("");
    return false;
  }
  return undefined;
};
