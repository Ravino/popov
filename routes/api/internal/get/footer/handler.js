"use strict";

module. exports = (req, res) => {

  try {
    const footer = global. db. getData ("/base/footer");
    res. json (footer);
    return true;
  }

  catch (err) {
    res. json ("");
    return false;
  }
  return undefined;
};
