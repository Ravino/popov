"use strict";

module. exports = (req, res) => {

  try {
    const gallery = global. db. getData ("/gallery");
    res. json (gallery);
    return true;
  }

  catch (err) {
    res. json ([]);
    return false;
  }
  return undefined;
};
